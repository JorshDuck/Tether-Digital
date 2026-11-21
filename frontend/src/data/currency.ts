import type { CurrencyCode, CurrencyConfig } from '../types/currency'
import type { Language } from '../types/i18n'

/**
 * Tabla de monedas soportadas y tasas de conversión de referencia respecto a 1 USD.
 * Actualizado: 14/11/2026 · Fuente: Banco Central de Bolivia (BCB), tipo de cambio oficial.
 * Puedes actualizar o calibrar cualquiera de estas tasas fácilmente cuando desees.
 */
export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  BOB: {
    code: 'BOB',
    symbol: 'Bs.',
    name: 'Bolivianos',
    nameEn: 'Bolivian Bolivianos',
    country: 'Bolivia',
    countryEn: 'Bolivia',
    flag: '🇧🇴',
    rateFromUsd: 11.67,
    locale: 'es-BO',
  },
  CLP: {
    code: 'CLP',
    symbol: '$',
    name: 'Pesos Chilenos',
    nameEn: 'Chilean Pesos',
    country: 'Chile',
    countryEn: 'Chile',
    flag: '🇨🇱',
    rateFromUsd: 996,
    locale: 'es-CL',
  },
  COP: {
    code: 'COP',
    symbol: '$',
    name: 'Pesos Colombianos',
    nameEn: 'Colombian Pesos',
    country: 'Colombia',
    countryEn: 'Colombia',
    flag: '🇨🇴',
    rateFromUsd: 3325,
    locale: 'es-CO',
  },
  PEN: {
    code: 'PEN',
    symbol: 'S/',
    name: 'Soles',
    nameEn: 'Peruvian Soles',
    country: 'Perú',
    countryEn: 'Peru',
    flag: '🇵🇪',
    rateFromUsd: 3.4,
    locale: 'es-PE',
  },
  MXN: {
    code: 'MXN',
    symbol: '$',
    name: 'Pesos Mexicanos',
    nameEn: 'Mexican Pesos',
    country: 'México',
    countryEn: 'Mexico',
    flag: '🇲🇽',
    rateFromUsd: 18.54,
    locale: 'es-MX',
  },
  ARS: {
    code: 'ARS',
    symbol: '$',
    name: 'Pesos Argentinos',
    nameEn: 'Argentine Pesos',
    country: 'Argentina',
    countryEn: 'Argentina',
    flag: '🇦🇷',
    rateFromUsd: 1543.59,
    locale: 'es-AR',
  },
  UYU: {
    code: 'UYU',
    symbol: '$U',
    name: 'Pesos Uruguayos',
    nameEn: 'Uruguayan Pesos',
    country: 'Uruguay',
    countryEn: 'Uruguay',
    flag: '🇺🇾',
    rateFromUsd: 40.59,
    locale: 'es-UY',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euros',
    nameEn: 'Euros',
    country: 'Europa',
    countryEn: 'Europe',
    flag: '🇪🇺',
    rateFromUsd: 0.9068,
    locale: 'de-DE',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'Dólares Americanos',
    nameEn: 'US Dollars',
    country: 'Global / EE.UU.',
    countryEn: 'Global / USA',
    flag: '🇺🇸',
    rateFromUsd: 1,
    locale: 'en-US',
  },
}

/**
 * Moneda inicial del catálogo: siempre Bolivianos (BOB) por defecto,
 * respetando únicamente la elección manual guardada por el visitante.
 */
export function detectInitialCurrency(): CurrencyCode {
  if (typeof window === 'undefined') return 'BOB'

  try {
    const saved = localStorage.getItem('tether_currency') as CurrencyCode
    if (saved && CURRENCIES[saved]) return saved
  } catch {
    // fallback seguro
  }

  return 'BOB'
}

/**
 * Formateo inteligente con redondeo comercial limpio por moneda
 */
export function formatCurrencyPrice(
  basePriceUsd: number,
  currency: CurrencyCode,
  lang: Language,
  perUnit?: string
): { main: string; secondary: string } {
  const prefix = lang === 'en' ? 'From' : 'Desde'
  const unitSuffix = perUnit ? ` / ${perUnit}` : ''
  const config = CURRENCIES[currency] || CURRENCIES.BOB

  // 1. Dólares (USD)
  if (currency === 'USD') {
    const formatted = new Intl.NumberFormat('en-US').format(basePriceUsd)
    const approxBob = Math.round((basePriceUsd * CURRENCIES.BOB.rateFromUsd) / 10) * 10
    const formattedBob = new Intl.NumberFormat('es-BO').format(approxBob)

    return {
      main: `${prefix} $${formatted} USD${unitSuffix}`,
      secondary: `(~ ${formattedBob} Bs.)`,
    }
  }

  // 2. Pesos Chilenos (CLP) - Redondeo a miles
  if (currency === 'CLP') {
    const rawClp = basePriceUsd * config.rateFromUsd
    const roundedClp = Math.round(rawClp / 5000) * 5000
    const formatted = new Intl.NumberFormat('es-CL').format(roundedClp)

    return {
      main: `${prefix} $${formatted} CLP${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 3. Pesos Colombianos (COP) - Redondeo a 10,000 o 50,000 COP
  if (currency === 'COP') {
    const rawCop = basePriceUsd * config.rateFromUsd
    const roundedCop = Math.round(rawCop / 10000) * 10000
    const formatted = new Intl.NumberFormat('es-CO').format(roundedCop)

    return {
      main: `${prefix} $${formatted} COP${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 4. Soles Peruanos (PEN) - Redondeo a múltiplos de 5 Soles
  if (currency === 'PEN') {
    const rawPen = basePriceUsd * config.rateFromUsd
    const roundedPen = Math.round(rawPen / 5) * 5
    const formatted = new Intl.NumberFormat('es-PE').format(roundedPen)

    return {
      main: `${prefix} S/ ${formatted} PEN${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 5. Pesos Mexicanos (MXN) - Redondeo a 50 MXN
  if (currency === 'MXN') {
    const rawMxn = basePriceUsd * config.rateFromUsd
    const roundedMxn = Math.round(rawMxn / 50) * 50
    const formatted = new Intl.NumberFormat('es-MX').format(roundedMxn)

    return {
      main: `${prefix} $${formatted} MXN${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 6. Pesos Argentinos (ARS) - Redondeo a 500 ARS
  if (currency === 'ARS') {
    const rawArs = basePriceUsd * config.rateFromUsd
    const roundedArs = Math.round(rawArs / 500) * 500
    const formatted = new Intl.NumberFormat('es-AR').format(roundedArs)

    return {
      main: `${prefix} $${formatted} ARS${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 7. Pesos Uruguayos (UYU) - Redondeo a 50 UYU
  if (currency === 'UYU') {
    const rawUyu = basePriceUsd * config.rateFromUsd
    const roundedUyu = Math.round(rawUyu / 50) * 50
    const formatted = new Intl.NumberFormat('es-UY').format(roundedUyu)

    return {
      main: `${prefix} $U${formatted} UYU${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 8. Euros (EUR) - Redondeo a 5 €
  if (currency === 'EUR') {
    const rawEur = basePriceUsd * config.rateFromUsd
    const roundedEur = Math.round(rawEur / 5) * 5
    const formatted = new Intl.NumberFormat('de-DE').format(roundedEur)

    return {
      main: `${prefix} ${formatted} €${unitSuffix}`,
      secondary: `(~ $${basePriceUsd} USD)`,
    }
  }

  // 9. Bolivianos (BOB) - Redondeo a decenas
  const rawBob = basePriceUsd * config.rateFromUsd
  const roundedBob = Math.round(rawBob / 10) * 10
  const formatted = new Intl.NumberFormat('es-BO').format(roundedBob)

  return {
    main: `${prefix} ${formatted} Bs.${unitSuffix}`,
    secondary: `(~ $${basePriceUsd} USD)`,
  }
}
