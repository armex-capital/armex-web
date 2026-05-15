@AGENTS.md

# Armex Capital — Sitio Web
## Proyecto a cargo de: Yael
## Guía completa para Claude Code

---

## ¿Qué es este proyecto?

Estás construyendo el **sitio web oficial de Armex Capital**, una firma mexicana de inversiones privadas con sede en Cuernavaca, Morelos. El sitio incluye:

- Página web pública (landing, productos, quiénes somos, contacto)
- Portal del cliente (login para ver su inversión)
- Página de verificación de contratos por QR

**Tu stack:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

---

## La empresa — contexto completo

**Armex Capital S.A.P.I. de C.V.**
- Firma de inversiones privadas en Cuernavaca, Morelos
- Gestiona capital de inversionistas con rendimientos mensuales
- Dirección: Av. De Los 50 Mts. 100 Torre 3 Piso 7, Villas Del Lago, CP 62374, Cuernavaca, Morelos
- Email: atclientes@armexcapital.com
- Web: armexcapital.com

**El equipo:**
- Gabriela Salas Arce — Directora General
- Javier Mendoza Pardo — Admin / Sistemas
- Marisol Salas Arce — Atención a Clientes
- Yael — Programación (tú)

---

## Productos de Armex Capital (datos reales para el sitio)

| Producto | Monto mínimo | Tasa mensual | Plazo |
|---|---|---|---|
| Capital Impulso | $5,000 MXN | 1.75% fijo | 12 meses |
| Capital Planificado | $10,000 MXN | 2.67% → 3.00% | 6 – 36 meses |
| Capital Protegido | $10,000 MXN | 1.83% – 2.16% | 12 meses, capital intacto |
| Capital Superior | $1,000,000 MXN | 3.00% → 3.33% | 6 – 36 meses |
| Capital Familiar | $20,000 MXN | Igual a Superior | 6 – 36 meses |

---

## Dirección de diseño — CRÍTICO

**Estética: Luxury Financiero Oscuro**

El sitio transmite: **confianza, solidez, exclusividad, rendimiento**.

```css
/* Paleta de colores — usar estas variables en globals.css */
--bg-primary:    #080C18;   /* negro azulado profundo */
--bg-secondary:  #0D1526;   /* navy oscuro */
--gold:          #C9A84C;   /* oro apagado — acento principal */
--gold-light:    #E8C97A;   /* oro claro — hovers */
--text-primary:  #F0EDE6;   /* blanco cálido */
--text-muted:    #8A9BB0;   /* gris azulado */
--border:        #1E2D45;   /* navy medio — bordes sutiles */
--green:         #2A9D5C;   /* verde — métricas positivas */

/* Tipografía */
Títulos:  Cormorant Garamond (Google Fonts) — elegante, financiero
Cuerpo:   DM Sans (Google Fonts) — legible, moderno
Números:  DM Mono (Google Fonts) — para tasas y cifras

/* NUNCA usar: Inter, Roboto, Arial, gradientes genéricos */
```

**Referencia visual:** mercury.com, wealthsimple.com, JP Morgan Private Bank

**Regla de oro:** Las tasas de rendimiento deben ser el elemento más prominente. Un visitante debe verlos en 3 segundos.

---

## Páginas a construir

```
/                → Home completo (hero + stats + productos + por qué Armex + footer)
/productos       → Detalle de todos los productos con simulador básico
/quienes-somos   → Historia, equipo, misión de Armex
/contacto        → Formulario + mapa + datos
/portal          → Login del cliente (solo diseño, sin funcionalidad)
/verifica        → Verificación QR (?folio=AMX0001) (solo diseño)
```

---

## Estructura de carpetas del proyecto

```
armex-web/
├── app/
│   ├── layout.tsx           ← fuentes + nav + metadata
│   ├── page.tsx             ← Home
│   ├── globals.css          ← variables CSS + estilos base
│   ├── productos/page.tsx
│   ├── quienes-somos/page.tsx
│   ├── contacto/page.tsx
│   ├── portal/page.tsx
│   └── verifica/page.tsx
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── product-card.tsx
│   └── stats-section.tsx
└── lib/
    └── products.ts          ← datos de productos (fuente de verdad)
```

---

## Orden de trabajo recomendado

**Empieza por aquí (Día 1):**
1. `globals.css` — variables de color y tipografía
2. `layout.tsx` — importar fuentes de Google Fonts + nav
3. `components/nav.tsx` — navegación oscura con logo
4. `components/hero.tsx` — sección principal del home
5. `app/page.tsx` — ensamblar el Home completo
6. `components/footer.tsx` — footer

**Después (Día 2):**
- Página de Productos
- Quiénes somos
- Contacto

**Al final (Día 3):**
- Portal (login visual)
- Verifica (pantalla QR)
- Animaciones finales + responsive móvil

---

## Cómo trabajar con Claude Code

```bash
# 1. Abrir terminal en esta carpeta
cd armex-web

# 2. Iniciar el servidor de desarrollo (dejarlo corriendo)
npm run dev
# → Abre http://localhost:3000 en el navegador

# 3. En otra terminal, abrir Claude Code
claude

# 4. Activar modo diseño premium
/frontend-design

# 5. Describir lo que quieres construir
```

**Ejemplo de prompt para Claude:**
```
Construye el componente Hero para Armex Capital siguiendo
el diseño luxury financiero oscuro del CLAUDE.md.
Usa Framer Motion para animaciones de entrada.
El headline debe impactar al inversionista y las tasas
deben ser visibles de inmediato.
```

---

## Animaciones con Framer Motion

Ya está instalado. Úsalo para:
- Fade-in de secciones al hacer scroll (`whileInView`)
- Hover effects en tarjetas de productos
- Entrada escalonada de elementos (stagger)

```tsx
// Ejemplo básico
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenido aquí
</motion.div>
```

---

## Lo que NO es tu responsabilidad ahora

- Backend o base de datos
- Funcionalidad real del login del portal
- Generador de contratos
- Deploy al servidor (Javier lo hace)

**Tu misión: que el sitio se vea increíble.** Diseño, animaciones, responsive. La funcionalidad viene en fases posteriores.

---

## Comandos útiles

```bash
npm run dev      # Servidor de desarrollo → localhost:3000
npm run build    # Verificar que compila sin errores
```

---

## Dudas

- Diseño o textos → pregúntale a Javier
- Código → pregúntale a Claude Code (está aquí para guiarte en todo)
