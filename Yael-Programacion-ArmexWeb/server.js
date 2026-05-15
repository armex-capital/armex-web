require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

/* ── SLOTS CONFIG ── */
const SLOTS_CONFIG_PATH = path.join(__dirname, 'slots-config.json');
const DEFAULT_CONFIG = { weekday: [10,11,12,13,14,15,16], saturday: [10,11,12,13,14,15] };

function loadSlotsConfig() {
  try {
    if (fs.existsSync(SLOTS_CONFIG_PATH)) {
      return JSON.parse(fs.readFileSync(SLOTS_CONFIG_PATH, 'utf8'));
    }
  } catch {}
  return { ...DEFAULT_CONFIG };
}

function saveSlotsConfig(config) {
  fs.writeFileSync(SLOTS_CONFIG_PATH, JSON.stringify(config, null, 2));
}

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

/* ── GOOGLE CALENDAR ── */
function getCalendarClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
  return google.calendar({ version: 'v3', auth });
}

/* ── NODEMAILER ── */
function getMailTransport() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

/* ── PARSEAR HORA "09:00 a.m." → { h24, minutes } ── */
function parseHora(horaStr) {
  const [time, period] = horaStr.trim().split(' ');
  let [h, m] = time.split(':').map(Number);
  if (period === 'p.m.' && h !== 12) h += 12;
  if (period === 'a.m.' && h === 12) h = 0;
  return { h24: h, minutes: m };
}

/* ── GET /api/slots-config ── */
app.get('/api/slots-config', (req, res) => {
  res.json(loadSlotsConfig());
});

/* ── POST /api/admin/login ── */
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ error: 'Contraseña incorrecta.' });
  }
});

/* ── GET /api/admin/config ── */
app.get('/api/admin/config', (req, res) => {
  if (req.headers.authorization !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'No autorizado.' });
  }
  res.json(loadSlotsConfig());
});

/* ── POST /api/admin/config ── */
app.post('/api/admin/config', (req, res) => {
  if (req.headers.authorization !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'No autorizado.' });
  }
  const { weekday, saturday } = req.body;
  if (!Array.isArray(weekday) || !Array.isArray(saturday)) {
    return res.status(400).json({ error: 'Formato inválido.' });
  }
  saveSlotsConfig({ weekday, saturday });
  res.json({ ok: true });
});

/* ── GET /api/slots-ocupados?fecha=YYYY-MM-DD ── */
app.get('/api/slots-ocupados', async (req, res) => {
  const { fecha } = req.query;
  if (!fecha) return res.json({ ocupados: [] });

  try {
    const calendar = getCalendarClient();
    const inicio = new Date(`${fecha}T00:00:00-06:00`);
    const fin    = new Date(`${fecha}T23:59:59-06:00`);

    const { data } = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: inicio.toISOString(),
      timeMax: fin.toISOString(),
      singleEvents: true,
    });

    const ocupados = (data.items || []).map(ev => {
      const d = new Date(ev.start.dateTime);
      const h = d.getHours();
      const m = d.getMinutes();
      const period = h < 12 ? 'a.m.' : 'p.m.';
      const h12 = h % 12 === 0 ? 12 : h % 12;
      return `${String(h12).padStart(2,'0')}:${String(m).padStart(2,'0')} ${period}`;
    });

    res.json({ ocupados });
  } catch (err) {
    console.error('Error slots-ocupados:', err.message);
    res.json({ ocupados: [] });
  }
});

/* ── POST /api/reservar-cita ── */
app.post('/api/reservar-cita', async (req, res) => {
  const { nombre, telefono, fecha, hora, fechaLabel } = req.body;
  if (!nombre || !telefono || !fecha || !hora) {
    return res.status(400).json({ error: 'Datos incompletos.' });
  }

  try {
    const calendar = getCalendarClient();
    const { h24, minutes } = parseHora(hora);

    const inicio = new Date(`${fecha}T${String(h24).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:00-06:00`);
    const fin    = new Date(inicio.getTime() + 60 * 60 * 1000);

    /* Verificar si el slot ya está ocupado */
    const { data: existing } = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: inicio.toISOString(),
      timeMax: fin.toISOString(),
      singleEvents: true,
    });

    if (existing.items && existing.items.length > 0) {
      return res.status(409).json({
        error: 'El horario seleccionado ya fue reservado. Por favor elige otro.',
      });
    }

    /* Crear evento en Google Calendar */
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      resource: {
        summary: `Cita Armex Capital — ${nombre}`,
        description: `Cliente: ${nombre}\nTeléfono: ${telefono}\nFecha: ${fechaLabel} ${hora}`,
        start: { dateTime: inicio.toISOString(), timeZone: 'America/Mexico_City' },
        end:   { dateTime: fin.toISOString(),    timeZone: 'America/Mexico_City' },
        colorId: '9',
      },
    });

    /* Enviar correo de confirmación */
    const transporter = getMailTransport();
    await transporter.sendMail({
      from: `"Armex Capital — Citas" <${process.env.EMAIL_USER}>`,
      to: 'atclientes@armexcapital.com',
      subject: `Nueva cita agendada — ${nombre} · ${fechaLabel} ${hora}`,
      html: `
        <div style="font-family:'Montserrat',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e0e0;">
          <div style="background:#0f0b77;padding:2rem;text-align:center;">
            <h1 style="color:#fff;font-size:1.4rem;margin:0;letter-spacing:2px;">Armex Capital</h1>
            <p style="color:rgba(255,255,255,0.7);font-size:0.8rem;margin:0.4rem 0 0;">Nueva solicitud de cita</p>
          </div>
          <div style="padding:2rem;">
            <h2 style="color:#0f0b77;font-size:1rem;margin-bottom:1.5rem;">Detalles de la cita</h2>
            <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:0.75rem 0;color:#888;font-weight:700;width:40%;">CLIENTE</td>
                <td style="padding:0.75rem 0;color:#222;font-weight:600;">${nombre}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:0.75rem 0;color:#888;font-weight:700;">TELÉFONO</td>
                <td style="padding:0.75rem 0;color:#222;font-weight:600;">${telefono}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:0.75rem 0;color:#888;font-weight:700;">FECHA</td>
                <td style="padding:0.75rem 0;color:#222;font-weight:600;">${fechaLabel}</td>
              </tr>
              <tr>
                <td style="padding:0.75rem 0;color:#888;font-weight:700;">HORA</td>
                <td style="padding:0.75rem 0;color:#0f0b77;font-weight:700;font-size:1rem;">${hora}</td>
              </tr>
            </table>
            <div style="background:#f7f7fc;border-left:4px solid #0f0b77;padding:1rem;margin-top:1.5rem;border-radius:0 4px 4px 0;">
              <p style="margin:0;font-size:0.82rem;color:#555;">El evento ha sido agregado automáticamente a tu Google Calendar. Recuerda confirmar la cita con el cliente a través de WhatsApp o llamada.</p>
            </div>
          </div>
          <div style="background:#f8f8f8;padding:1rem;text-align:center;font-size:0.75rem;color:#aaa;">
            Armex Capital, S.A.P.I. de C.V. · Cuernavaca, Morelos · 777 855 3500
          </div>
        </div>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Error reservar-cita:', err.message);
    res.status(500).json({ error: 'Error al procesar la cita. Intenta de nuevo.' });
  }
});

/* ── RUTAS ── */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Armex Capital — Servidor corriendo en http://localhost:${PORT}`);
});
