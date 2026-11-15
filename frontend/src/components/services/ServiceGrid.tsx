import React from 'react'
import type { Service } from '../../types/service'
import type { TranslationDictionary, Language } from '../../types/i18n'
import type { CurrencyCode } from '../../types/currency'
import { ServiceCard } from './ServiceCard'
import { CurrencySelector } from '../common/CurrencySelector'
import { SearchX, CreditCard } from 'lucide-react'

interface ServiceGridProps {
  services: Service[]
  tCatalog: TranslationDictionary['catalog']
  tCard: TranslationDictionary['card']
  currentCurrency: CurrencyCode
  currentLang: Language
  onQuoteClick: (service: Service) => void
  onCurrencyChange: (currency: CurrencyCode) => void
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  tCatalog,
  tCard,
  currentCurrency,
  currentLang,
  onQuoteClick,
  onCurrencyChange,
}) => {
  if (services.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-muted)]">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">{tCatalog.noServicesTitle}</h3>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          {tCatalog.noServicesDesc}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Currency selector bar — inline above the grid */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
        {/* Left: installments notice */}
        <span className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-[var(--accent-badge-text)] bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)] px-3 py-1.5 rounded-full shadow-sm">
          <CreditCard className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          {tCatalog.installments}
        </span>

        {/* Right: currency picker + hint */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--text-muted)]">
              {currentLang === 'en' ? 'View prices in:' : 'Ver precios en:'}
            </span>
          </div>
          <CurrencySelector
            currentCurrency={currentCurrency}
            onCurrencyChange={onCurrencyChange}
            currentLang={currentLang}
          />
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            tCard={tCard}
            currentCurrency={currentCurrency}
            currentLang={currentLang}
            onQuoteClick={onQuoteClick}
          />
        ))}
      </div>
    </div>
  )
}
