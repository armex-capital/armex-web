export type Product = {
  id: string;
  name: string;
  tagline: string;
  minAmount: number;
  maxAmount: number | null;
  rate: string;
  rateDetail: string;
  term: string;
  termDetail: string;
  color: string;
  features: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    id: "impulso",
    name: "Capital Impulso",
    tagline: "Tu primer paso hacia la libertad financiera",
    minAmount: 5000,
    maxAmount: 9999,
    rate: "1.75%",
    rateDetail: "mensual fijo",
    term: "12 meses",
    termDetail: "plazo forzoso",
    color: "#2A9D5C",
    badge: "Accesible",
    features: [
      "Desde $5,000 MXN",
      "Tasa fija garantizada",
      "Multiplicador de capital opcional",
      "Cambio automático de tasa al superar $20,000",
    ],
  },
  {
    id: "planificado",
    name: "Capital Planificado",
    tagline: "Crecimiento acumulado a mediano plazo",
    minAmount: 10000,
    maxAmount: 999999,
    rate: "hasta 3.00%",
    rateDetail: "mensual — crece cada año",
    term: "6 a 36 meses",
    termDetail: "retiro desde el mes 6",
    color: "#C9A84C",
    badge: "Más popular",
    features: [
      "2.67% meses 1–12",
      "2.83% meses 13–24",
      "3.00% meses 25–36",
      "Retiro anticipado desde mes 6",
    ],
  },
  {
    id: "protegido",
    name: "Capital Protegido",
    tagline: "Flujo constante con tu capital intacto",
    minAmount: 10000,
    maxAmount: 999999,
    rate: "hasta 2.16%",
    rateDetail: "mensual, pagos periódicos",
    term: "12 meses",
    termDetail: "capital 100% protegido",
    color: "#4A90D9",
    features: [
      "1.83% mensual (pagos mensuales)",
      "2.00% bimestral",
      "2.16% trimestral",
      "Capital devuelto íntegro al vencimiento",
    ],
  },
  {
    id: "superior",
    name: "Capital Superior",
    tagline: "Condiciones premium para grandes inversionistas",
    minAmount: 1000000,
    maxAmount: null,
    rate: "hasta 3.33%",
    rateDetail: "mensual — tasas exclusivas",
    term: "6 a 36 meses",
    termDetail: "condiciones preferentes",
    color: "#9B59B6",
    badge: "Premium",
    features: [
      "3.00% meses 1–12",
      "3.17% meses 13–24",
      "3.33% meses 25–36",
      "Atención personalizada",
    ],
  },
];

export const companyStats = [
  { value: "100+", label: "Inversionistas activos" },
  { value: "$50M+", label: "Capital gestionado" },
  { value: "3+", label: "Años de experiencia" },
  { value: "100%", label: "Capital protegido siempre" },
];
