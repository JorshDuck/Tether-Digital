import { useState, useMemo, useEffect } from 'react'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { ServiceFilters } from './components/services/ServiceFilters'
import { ServiceGrid } from './components/services/ServiceGrid'
import { FreeAdvisoryBanner } from './components/services/FreeAdvisoryBanner'
import { HowItWorks } from './components/sections/HowItWorks'
import { PaymentGuarantee } from './components/sections/PaymentGuarantee'
import { WhatsAppFloat } from './components/common/WhatsAppFloat'
import { BackgroundLayer } from './components/common/BackgroundLayer'
import { getCategories, getServices } from './data/services'
import { detectInitialCurrency } from './data/currency'
import { buildWhatsAppUrl } from './data/contact'
import { detectInitialLanguage } from './utils/i18nDetector'
import { trackEvent } from './utils/analytics'
import { TRANSLATIONS } from './data/translations'
import type { Service, ServiceCategory } from './types/service'
import type { ThemeMode } from './types/theme'
import type { Language } from './types/i18n'
import type { CurrencyCode } from './types/currency'
import { Code2, Bot, Megaphone, CreditCard } from 'lucide-react'

export function App() {
  // Theme state: defaults to Cyan
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('tether_theme') as ThemeMode
    return saved || 'dark-cyan'
  })

  // Language state: defaults to saved preference or auto-detected browser language
  const [language, setLanguage] = useState<Language>(() => {
    return detectInitialLanguage()
  })

  // Currency state: defaults to Bolivianos (BOB), or the visitor's saved choice
  const [currency, setCurrency] = useState<CurrencyCode>(() => {
    return detectInitialCurrency()
  })

  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all')

  // Current translation dictionary
  const t = TRANSLATIONS[language]

  // Synchronize theme with HTML data attribute and storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tether_theme', theme)
  }, [theme])

  // Synchronize language with storage and the document lang attribute
  useEffect(() => {
    localStorage.setItem('tether_lang', language)
    document.documentElement.lang = language
  }, [language])

  // Synchronize currency with storage
  useEffect(() => {
    localStorage.setItem('tether_currency', currency)
  }, [currency])

  // Dynamic localized data
  const categories = useMemo(() => getCategories(language), [language])
  const services = useMemo(() => getServices(language), [language])

  // Filtered services
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') {
      return services
    }
    return services.filter((s) => s.category === selectedCategory)
  }, [selectedCategory, services])

  // Track preference changes
  const handleThemeChange = (next: ThemeMode) => {
    setTheme(next)
    trackEvent('theme_change', { theme: next })
  }

  const handleLanguageChange = (next: Language) => {
    setLanguage(next)
    trackEvent('language_change', { language: next })
  }

  const handleCurrencyChange = (next: CurrencyCode) => {
    setCurrency(next)
    trackEvent('currency_change', { currency: next })
  }

  const handleCategoryChange = (next: ServiceCategory) => {
    setSelectedCategory(next)
    trackEvent('category_filter', { category: next })
  }

  const openService = (service: Service) => {
    window.open(buildWhatsAppUrl(service.whatsappPrefill), '_blank', 'noopener,noreferrer')
  }

  // Open WhatsApp directly with only the service the user wants to quote
  const handleOpenQuote = (service: Service) => {
    trackEvent('quote_service', {
      service_id: service.id,
      service_name: service.name,
      category: service.category,
    })
    openService(service)
  }

  // Header quick contact: sends the most popular service directly to WhatsApp
  const handleGeneralContact = () => {
    const popularService = services.find((s) => s.isPopular) || services[0]
    if (popularService) {
      trackEvent('quote_general', { service_id: popularService.id })
      openService(popularService)
    }
  }

  // Free advisory WhatsApp link
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

      {/* Top sticky navigation with Currency, Themes, Languages & Actions */}
      <Header
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        currentLang={language}
        onLangChange={handleLanguageChange}
        t={t}
        onDirectContactClick={handleGeneralContact}
        onFreeAdvisoryClick={handleFreeAdvisory}
      />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-4 sm:pt-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] bg-clip-text text-transparent">
            {t.hero.titleLead} {t.hero.titleAccent}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* Key pillars chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
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

        {/* Free Advisory Banner (Reassuring banner for non-tech clients) */}
        <FreeAdvisoryBanner tAdvisory={t.freeAdvisory} />

        {/* Categories / Filter Section */}
        <section id="catalogo" className="space-y-8 scroll-mt-28">
          <ServiceFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          {/* Cards Grid with dynamic Currency Conversion */}
          <ServiceGrid
            services={filteredServices}
            tCatalog={t.catalog}
            tCard={t.card}
            currentCurrency={currency}
            currentLang={language}
            onQuoteClick={handleOpenQuote}
            onCurrencyChange={handleCurrencyChange}
          />
        </section>

        {/* How it works */}
        <HowItWorks t={t.howItWorks} />

        {/* Payment methods & guarantee */}
        <PaymentGuarantee t={t.trust} />

        {/* Custom Project Callout */}
        <section className="content-deferred relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-accent)] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
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

      {/* Footer */}
      <Footer tFooter={t.footer} />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat label={t.nav.whatsappFloatLabel} message={t.nav.whatsappFloatMessage} />
    </div>
  )
}

export default App
