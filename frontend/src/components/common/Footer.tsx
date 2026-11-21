import React from 'react'
import { ShieldCheck, Clock, Zap } from 'lucide-react'
import type { TranslationDictionary } from '../../types/i18n'
import { buildWhatsAppUrl } from '../../data/contact'
import { trackEvent } from '../../utils/analytics'

const CURRENT_YEAR = new Date().getFullYear()

interface FooterProps {
  tFooter: TranslationDictionary['footer']
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.15 22 17 22 12.06Z" />
  </svg>
)

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43-.25.66-.6 1.22-1.15 1.77-.55.55-1.11.9-1.77 1.15-.64.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.25-.66.6-1.22 1.15-1.77.55-.55 1.11-.9 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.51.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.31.88-.35 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.51.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.31 1.86.35 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.51-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.31-.88.35-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.51-.35-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.31-1.86-.35-1.05-.05-1.37-.06-4.04-.06Zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28Zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68Zm5.34-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
  </svg>
)

const linkClass =
  'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-inner)] text-xs font-semibold text-[var(--text-secondary)] transition-colors'

export const Footer: React.FC<FooterProps> = ({ tFooter }) => {
  return (
    <footer className="relative z-10 w-full border-t border-[var(--border-card)] bg-[var(--bg-surface)] text-[var(--text-muted)] py-12 px-4 sm:px-6 lg:px-8 mt-20">
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

        {/* Social & contact links */}
        <div className="flex flex-col items-center gap-4 pb-8 border-b border-[var(--border-card)]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            {tFooter.followTitle}
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildWhatsAppUrl(tFooter.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tFooter.visit} WhatsApp`}
              title={`${tFooter.visit} WhatsApp`}
              onClick={() => trackEvent('social_click', { network: 'whatsapp', location: 'footer' })}
              className={`${linkClass} hover:text-emerald-500 hover:border-emerald-500/40`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/TetherDigital.Agency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tFooter.visit} Facebook`}
              title={`${tFooter.visit} Facebook`}
              onClick={() => trackEvent('social_click', { network: 'facebook', location: 'footer' })}
              className={`${linkClass} hover:text-blue-500 hover:border-blue-500/40`}
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/tetherdigital.agency"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tFooter.visit} Instagram`}
              title={`${tFooter.visit} Instagram`}
              onClick={() => trackEvent('social_click', { network: 'instagram', location: 'footer' })}
              className={`${linkClass} hover:text-pink-500 hover:border-pink-500/40`}
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
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
