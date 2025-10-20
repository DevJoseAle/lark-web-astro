
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}


export function calculateProgress(current: number, goal: number): number {
  if (!goal || goal === 0) return 0;
  const progress = (current / goal) * 100;
  return Math.min(Math.round(progress), 100);
}

export function getCountryFlag(countryCode: string): string {
  const flags: Record<string, string> = {
    US: '🇺🇸',
    MX: '🇲🇽',
    CO: '🇨🇴',
    CL: '🇨🇱',
  };
  return flags[countryCode] || '🌎';
}