export type CurrencyCode = 'BOB' | 'CLP' | 'COP' | 'PEN' | 'MXN' | 'ARS' | 'UYU' | 'EUR' | 'USD'

export interface CurrencyConfig {
  code: CurrencyCode
  symbol: string
  name: string
  nameEn?: string
  country: string
  countryEn?: string
  flag: string
  rateFromUsd: number
  locale: string
}
