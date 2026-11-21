import type { CurrencyCode } from './currency'

export type ServiceCategory =
  | 'all'
  | 'web-development'
  | 'redesign-migration'
  | 'optimization'
  | 'meta-ads'
  | 'google-tiktok-ads'
  | 'automation-chatbots'

export type ServiceTier = 'Básico' | 'Profesional' | 'Avanzado' | 'Especializado' | 'Basic' | 'Professional' | 'Advanced' | 'Specialized'

export type PriceQuote = number | 'quote'

export type PriceByCurrency = Partial<Record<CurrencyCode, PriceQuote>>

export interface Service {
  id: string
  name: string
  category: Exclude<ServiceCategory, 'all'>
  tier?: ServiceTier
  badge?: string
  isPopular?: boolean
  summary: string
  description: string
  basePriceUsd: number
  prices?: PriceByCurrency
  setupPrices?: PriceByCurrency
  monthlyPrices?: PriceByCurrency
  pricePerUnit?: string
  deliveryTime: string
  includes: string[]
  ctaText: string
  whatsappPrefill: string
}

export interface CategoryOption {
  id: ServiceCategory
  label: string
  iconName: 'Globe' | 'RefreshCw' | 'Gauge' | 'Megaphone' | 'Target' | 'Bot' | 'Layers'
  description?: string
}
