import { useMemo } from 'react'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { FreeAdvisoryBanner } from './components/services/FreeAdvisoryBanner'
import { HowItWorks } from './components/sections/HowItWorks'
import { PaymentGuarantee } from './components/sections/PaymentGuarantee'
import { FeaturedServices } from './components/sections/FeaturedServices'
import { WhatsAppFloat } from './components/common/WhatsAppFloat'
import { BackgroundLayer } from './components/common/BackgroundLayer'
import { TetherLogo } from './components/common/TetherLogo'
import { getServices } from './data/services'
import { buildWhatsAppUrl } from './data/contact'
import { useSitePreferences } from './utils/useSitePreferences'
import { useScrollReveal } from './utils/useScrollReveal'
import { trackEvent } from './utils/analytics'
import type { Service } from './types/service'
import { Code2, Bot, Megaphone, CreditCard, ArrowRight } from 'lucide-react'

export function App() {
  const { theme, language, t, handleThemeChange, handleLanguageChange } = useSitePreferences()
  const services = useMemo(() => getServices(language), [language])

  useScrollReveal()

  const openService = (service: Service) => {
    window.open(buildWhatsAppUrl(service.whatsappPrefill), '_blank', 'noopener,noreferrer')
  }

  const handleGeneralContact = () => {
    const popularService = services.find((s) => s.isPopular) || services[0]
    if (popularService) {
      trackEvent('quote_general', { service_id: popularService.id })
      openService(popularService)
    }
  }

  const handleFreeAdvisory = () => {
    trackEvent('free_advisory')
    window.open(
      buildWhatsAppUrl(t.freeAdvisory.whatsappPrefill),
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div
      data-theme={theme}
      className="relative min-h-screen flex flex-col text-[var(--text-primary)]"
    >
      <a href="#main-content" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <BackgroundLayer />

      <Header
        homeHref="./"
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        currentLang={language}
        onLangChange={handleLanguageChange}
        t={t}
        onDirectContactClick={handleGeneralContact}
        onFreeAdvisoryClick={handleFreeAdvisory}
      />

      <main id="main-content" className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-4 sm:pt-8">
          <div className="hero-enter hero-enter-1">
            <a
              href="./"
              aria-label="Tether Digital — Inicio"
              onClick={() => trackEvent('home_logo_click', { location: 'hero' })}
              className="hero-logo"
            >
              <TetherLogo size={124} showText={false} />
            </a>
          </div>

          <h1 className="hero-enter hero-enter-2 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] bg-clip-text text-transparent">
            {t.hero.titleLead} {t.hero.titleAccent}
          </h1>

          <p className="hero-enter hero-enter-3 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="hero-enter hero-enter-4 flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-card)] px-3 py-1.5 rounded-full shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-[var(--cat-web-text)]" />
              {t.hero.chipWeb}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-card)] px-3 py-1.5 rounded-full shadow-sm">
              <Megaphone className="w-3.5 h-3.5 text-[var(--cat-ads-text)]" />
              {t.hero.chipAds}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-card)] px-3 py-1.5 rounded-full shadow-sm">
              <Bot className="w-3.5 h-3.5 text-[var(--cat-auto-text)]" />
              {t.hero.chipAuto}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)] px-3 py-1.5 rounded-full shadow-sm">
              <CreditCard className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              {t.hero.chipInstallments}
            </span>
          </div>
        </section>

        <FeaturedServices services={services} t={t.featured} />

        <FreeAdvisoryBanner tAdvisory={t.freeAdvisory} />

        <section id="catalogo" data-reveal className="content-deferred relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl scroll-mt-28">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {t.homeCatalogCta.title}
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.homeCatalogCta.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="catalogo/"
              onClick={() => trackEvent('catalog_link', { location: 'home' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--btn-primary-bg)] hover:opacity-90 text-[var(--btn-primary-text)] font-bold text-sm transition-all shadow-lg shadow-[var(--accent-glow)]"
            >
              {t.homeCatalogCta.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <HowItWorks t={t.howItWorks} />

        <PaymentGuarantee t={t.trust} />

        <section data-reveal className="content-deferred relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {t.customProject.title}
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.customProject.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleGeneralContact}
              className="px-6 py-3 rounded-xl bg-[var(--btn-primary-bg)] hover:opacity-90 text-[var(--btn-primary-text)] font-bold text-sm transition-all shadow-lg shadow-[var(--accent-glow)] cursor-pointer"
            >
              {t.customProject.cta}
            </button>
          </div>
        </section>
      </main>

      <Footer tFooter={t.footer} />

      <WhatsAppFloat label={t.nav.whatsappFloatLabel} message={t.nav.whatsappFloatMessage} />
    </div>
  )
}

export default App
