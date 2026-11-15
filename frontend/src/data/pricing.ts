import type { Service, PriceQuote, PriceByCurrency } from '../types/service'
import type { CurrencyCode } from '../types/currency'
import type { Language } from '../types/i18n'
import { CURRENCIES, formatCurrencyPrice } from './currency'

export interface PriceRow {
  label: string
  value: string
}

export type ResolvedPrice =
  | { kind: 'single'; value: string }
  | { kind: 'split'; rows: PriceRow[] }

function formatAmount(amount: number, currency: CurrencyCode): string {
  const config = CURRENCIES[currency] || CURRENCIES.BOB
  const formatted = new Intl.NumberFormat(config.locale, {
    maximumFractionDigits: 2,
  }).format(amount)

  switch (currency) {
    case 'USD':
      return `$${formatted} USD`
    case 'BOB':
      return `${formatted} Bs.`
    case 'EUR':
      return `${formatted} €`
    default:
      return `${config.symbol}${formatted} ${currency}`
  }
}

function quoteText(lang: Language): string {
  return lang === 'en' ? 'To be quoted' : 'Por cotizar'
}

function priceValue(value: PriceQuote, currency: CurrencyCode, lang: Language): string {
  return value === 'quote' ? quoteText(lang) : formatAmount(value, currency)
}

function fromMap(
  map: PriceByCurrency | undefined,
  fallbackUsd: number,
  currency: CurrencyCode,
  lang: Language
): string {
  const explicit = map?.[currency]
  if (explicit !== undefined) return priceValue(explicit, currency, lang)

  const usdValue = map?.USD
  if (usdValue === 'quote') return quoteText(lang)

  const baseUsd = typeof usdValue === 'number' ? usdValue : fallbackUsd
  return formatCurrencyPrice(baseUsd, currency, lang).main.replace(/^(From|Desde)\s+/, '')
}

export function resolveServicePrice(
  service: Service,
  currency: CurrencyCode,
  lang: Language
): ResolvedPrice {
  const prefix = lang === 'en' ? 'From' : 'Desde'

  if (service.setupPrices || service.monthlyPrices) {
    const rows: PriceRow[] = []

    if (service.setupPrices) {
      rows.push({
        label: lang === 'en' ? 'Setup' : 'Configuración',
        value: fromMap(service.setupPrices, service.basePriceUsd, currency, lang),
      })
    }

    if (service.monthlyPrices) {
      rows.push({
        label: lang === 'en' ? 'Monthly' : 'Mensual',
        value: fromMap(service.monthlyPrices, service.basePriceUsd, currency, lang),
      })
    }

    return { kind: 'split', rows }
  }

  const explicit = service.prices?.[currency]

  if (explicit !== undefined) {
    const unit = explicit === 'quote' || !service.pricePerUnit ? '' : ` / ${service.pricePerUnit}`
    return {
      kind: 'single',
      value: `${prefix} ${priceValue(explicit, currency, lang)}${unit}`,
    }
  }

  const usdValue = service.prices?.USD
  const baseUsd = typeof usdValue === 'number' ? usdValue : service.basePriceUsd

  return {
    kind: 'single',
    value: formatCurrencyPrice(baseUsd, currency, lang, service.pricePerUnit).main,
  }
}
