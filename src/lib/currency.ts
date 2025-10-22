// src/lib/currency.ts

export interface CurrencyInfo {
  code: string;
  symbol: string;
  exchangeRate: number; // Relative to USD
}

export const CURRENCIES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', exchangeRate: 1 },
  MXN: { code: 'MXN', symbol: '$', exchangeRate: 17.5 }, // Aprox
  COP: { code: 'COP', symbol: '$', exchangeRate: 4000 }, // Aprox
  CLP: { code: 'CLP', symbol: '$', exchangeRate: 950 }, // Aprox
};

export const COUNTRY_TO_CURRENCY: Record<string, string> = {
  US: 'USD',
  MX: 'MXN',
  CO: 'COP',
  CL: 'CLP',
};

/**
 * Detecta el país del usuario usando Cloudflare headers o IP API
 */
export async function detectUserCountry(request: Request): Promise<string> {
  // 1. Intentar desde Cloudflare headers (si está deployado en Vercel/Cloudflare)
  const cfCountry = request.headers.get('cf-ipcountry');
  if (cfCountry && cfCountry !== 'XX') {
    return cfCountry;
  }

  // 2. Fallback: usar IP del usuario
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip');

  if (ip) {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/country/`);
      const country = await response.text();
      if (country && country.length === 2) {
        return country;
      }
    } catch (error) {
      console.error('Error detecting country:', error);
    }
  }

  // 3. Default: Chile (puedes cambiarlo según tu caso)
  return 'CL';
}

/**
 * Obtiene la moneda del usuario según su país
 */
export function getUserCurrency(countryCode: string): string {
  return COUNTRY_TO_CURRENCY[countryCode] || 'USD';
}

/**
 * Convierte un monto de una moneda a otra
 */
export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  if (fromCurrency === toCurrency) return amount;

  const from = CURRENCIES[fromCurrency];
  const to = CURRENCIES[toCurrency];

  if (!from || !to) return amount;

  // Convertir a USD primero, luego a la moneda destino
  const amountInUSD = amount / from.exchangeRate;
  const convertedAmount = amountInUSD * to.exchangeRate;

  return Math.round(convertedAmount);
}

/**
 * Formatea un monto según la moneda
 */
export function formatCurrency(amount: number, currency: string): string {
  const currencyInfo = CURRENCIES[currency];
  if (!currencyInfo) return `$${amount.toLocaleString()}`;

  // Para monedas sin decimales (CLP, COP)
  const decimals = ['CLP', 'COP'].includes(currency) ? 0 : 2;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}