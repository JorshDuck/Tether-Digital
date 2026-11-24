import { Globe, Megaphone, Bot, ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types/service'
import type { TranslationDictionary } from '../../types/i18n'
import { trackEvent } from '../../utils/analytics'

interface FeaturedServicesProps {
  services: Service[]
  t: TranslationDictionary['featured']
}

const FEATURED_IDS = ['web-landing-page', 'meta-ads-campaign-setup', 'auto-whatsapp-business-api']

const ICONS = [Globe, Megaphone, Bot]

export function FeaturedServices({ services, t }: FeaturedServicesProps) {
  const featured = FEATURED_IDS
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is Service => Boolean(service))

  return (
    <section className="space-y-8">
      <h2 data-reveal className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((service, index) => {
          const Icon = ICONS[index]
          return (
            <article
              key={service.id}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              className="group relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-[var(--border-accent)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-2xl bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)] flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {service.summary}
              </p>

              <a
                href="catalogo/"
                onClick={() => trackEvent('featured_service_click', { service_id: service.id })}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent-primary)] hover:opacity-80 transition-opacity"
              >
                {t.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
