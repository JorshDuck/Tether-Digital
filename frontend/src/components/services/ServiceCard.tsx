import React from 'react'
import {
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  ArrowRight,
  DollarSign,
  AlertTriangle
} from 'lucide-react'
import type { Service } from '../../types/service'
import type { TranslationDictionary, Language } from '../../types/i18n'
import type { CurrencyCode } from '../../types/currency'
import { resolveServicePrice } from '../../data/pricing'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

interface ServiceCardProps {
  service: Service
  tCard: TranslationDictionary['card']
  currentCurrency: CurrencyCode
  currentLang: Language
  onQuoteClick: (service: Service) => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  tCard,
  currentCurrency,
  currentLang,
  onQuoteClick,
}) => {
  const getCategoryBadge = (category: Service['category']) => {
    switch (category) {
      case 'web-development':
        return 'text-[var(--cat-web-text)] bg-[var(--cat-web-bg)] border-[var(--cat-web-border)]'
      case 'meta-ads':
        return 'text-[var(--cat-ads-text)] bg-[var(--cat-ads-bg)] border-[var(--cat-ads-border)]'
      case 'automation-chatbots':
        return 'text-[var(--cat-auto-text)] bg-[var(--cat-auto-bg)] border-[var(--cat-auto-border)]'
      default:
        return 'text-[var(--text-muted)] bg-[var(--bg-inner)] border-[var(--border-card)]'
    }
  }

  const getCategoryLabel = (category: Service['category']) => {
    switch (category) {
      case 'web-development':
        return tCard.categoryWeb
      case 'meta-ads':
        return tCard.categoryAds
      case 'automation-chatbots':
        return tCard.categoryAuto
    }
  }

  const price = resolveServicePrice(service, currentCurrency, currentLang)

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between rounded-3xl bg-[var(--bg-card)] p-6 sm:p-7 border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:translate-y-[-2px]',
        service.isPopular
          ? 'border-[var(--border-accent)] shadow-xl shadow-[var(--accent-glow)] ring-1 ring-[var(--border-accent)]'
          : 'border-[var(--border-card)] hover:border-[var(--border-card-hover)]'
      )}
    >
      {/* Popular floating badge */}
      {service.isPopular && (
        <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] text-[11px] font-black text-[var(--btn-primary-text)] uppercase tracking-wider shadow-md shadow-[var(--accent-glow)]">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{service.badge || tCard.recommendedBadge}</span>
        </div>
      )}

      {/* Main card body */}
      <div className="space-y-5">
        {/* Badges bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'px-2.5 py-1 rounded-lg text-xs font-semibold border',
              getCategoryBadge(service.category)
            )}
          >
            {getCategoryLabel(service.category)}
          </span>

          {service.tier && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--bg-inner)] text-[var(--text-secondary)] border border-[var(--border-card)]">
              {tCard.levelPrefix} {service.tier}
            </span>
          )}

          {!service.isPopular && service.badge && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[var(--bg-inner)] text-[var(--text-muted)] border border-[var(--border-card)]">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title and summary */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
            {service.summary}
          </p>
        </div>

        {/* Price & Delivery details box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-card)]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
              <DollarSign className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>{tCard.estimatedInvestment}</span>
            </div>
            {price.kind === 'single' ? (
              <p className="text-lg sm:text-xl font-black text-[var(--text-primary)] mt-0.5 tracking-tight">
                {price.value}
              </p>
            ) : (
              <div className="mt-0.5 space-y-0.5">
                {price.rows.map((row) => (
                  <p
                    key={row.label}
                    className="text-sm sm:text-[15px] font-bold text-[var(--text-primary)] tracking-tight"
                  >
                    <span className="text-[var(--text-muted)] font-medium">{row.label}: </span>
                    {row.value}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>{tCard.deliveryTime}</span>
            </div>
            <p className="text-sm font-semibold text-[var(--text-secondary)] mt-1">
              {service.deliveryTime}
            </p>
          </div>
        </div>

        {/* Included items */}
        {service.includes.length > 0 && (
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] pt-2">
            {service.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Exclusions / Requirements (Highlighted in vivid red — theme-safe) */}
        {service.excludes && service.excludes.length > 0 && (
          <div className="space-y-2 pt-2 pb-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{tCard.conditionsAndExclusions}</span>
            </h4>
            <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 space-y-2">
              <ul className="space-y-1.5 text-xs text-red-400 font-medium">
                {service.excludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Card Action footer */}
      <div className="pt-6 mt-6 border-t border-[var(--border-card)]">
        <Button
          variant={service.isPopular ? 'primary' : 'secondary'}
          size="md"
          className="w-full flex items-center justify-between group/btn"
          onClick={() => onQuoteClick(service)}
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}
