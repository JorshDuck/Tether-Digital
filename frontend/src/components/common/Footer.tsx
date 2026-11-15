import React from 'react'
import { ShieldCheck, Clock, Zap } from 'lucide-react'
import type { TranslationDictionary } from '../../types/i18n'

const CURRENT_YEAR = new Date().getFullYear()

interface FooterProps {
  tFooter: TranslationDictionary['footer']
}

export const Footer: React.FC<FooterProps> = ({ tFooter }) => {
  return (
    <footer className="w-full border-t border-[var(--border-card)] bg-[var(--bg-surface)] text-[var(--text-muted)] py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Value pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[var(--border-card)] text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--accent-badge-bg)] text-[var(--accent-primary)] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">{tFooter.pillar1Title}</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {tFooter.pillar1Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">{tFooter.pillar2Title}</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {tFooter.pillar2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">{tFooter.pillar3Title}</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {tFooter.pillar3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {CURRENT_YEAR} <strong className="text-[var(--text-primary)]">Tether Digital</strong>. {tFooter.rights}
          </p>
          <p className="text-center md:text-right max-w-xl">
            {tFooter.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
