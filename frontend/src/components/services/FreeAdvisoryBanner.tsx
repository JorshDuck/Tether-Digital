import React from 'react'
import { HeartHandshake, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from 'lucide-react'
import type { TranslationDictionary } from '../../types/i18n'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../data/contact'

interface FreeAdvisoryBannerProps {
  tAdvisory: TranslationDictionary['freeAdvisory']
}

export const FreeAdvisoryBanner: React.FC<FreeAdvisoryBannerProps> = ({ tAdvisory }) => {
  const whatsappUrl = buildWhatsAppUrl(tAdvisory.whatsappPrefill)

  return (
    <section data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--accent-badge-bg)] border border-[var(--border-accent)] p-6 sm:p-10 shadow-2xl transition-all duration-300">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent-glow)] blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Text & reassurance */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[var(--accent-badge-bg)] text-[var(--accent-badge-text)] border border-[var(--accent-badge-border)]">
            <HeartHandshake className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>{tAdvisory.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
            {tAdvisory.title}
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
            {tAdvisory.description}
          </p>

          {/* Value points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{tAdvisory.bullet1}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{tAdvisory.bullet2}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{tAdvisory.bullet3}</span>
            </div>
          </div>
        </div>

        {/* Right column: Action */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-bold shadow-xl shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>{tAdvisory.cta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>

          <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--accent-primary)]" />
            {tAdvisory.footnote}
          </span>
        </div>
      </div>
    </section>
  )
}
