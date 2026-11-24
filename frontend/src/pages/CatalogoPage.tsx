import { useMemo, useState } from 'react'
import { Header } from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { BackgroundLayer } from '../components/common/BackgroundLayer'
import { WhatsAppFloat } from '../components/common/WhatsAppFloat'
import { FreeAdvisoryBanner } from '../components/services/FreeAdvisoryBanner'
import { ServiceFilters } from '../components/services/ServiceFilters'
import { ServiceGrid } from '../components/services/ServiceGrid'
import { getCategories, getServices } from '../data/services'
import { buildWhatsAppUrl } from '../data/contact'
import { useSitePreferences } from '../utils/useSitePreferences'
import { useScrollReveal } from '../utils/useScrollReveal'
import { trackEvent } from '../utils/analytics'
import type { Service, ServiceCategory } from '../types/service'
import { ArrowLeft } from 'lucide-react'

export function CatalogoPage() {
  const {
    theme,
    language,
    currency,
    t,
    handleThemeChange,
    handleLanguageChange,
    handleCurrencyChange,
  } = useSitePreferences()

  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all')

  useScrollReveal()

  const categories = useMemo(() => getCategories(language), [language])
  const services = useMemo(() => getServices(language), [language])

  const filteredServices = useMemo(() => {
    return selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory)
  }, [selectedCategory, services])

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

  const handleCategoryChange = (category: ServiceCategory) => {
    setSelectedCategory(category)
    trackEvent('category_filter', { category })
  }

  const handleOpenQuote = (service: Service) => {
    trackEvent('quote_service', {
      service_id: service.id,
      service_name: service.name,
      category: service.category,
    })
    openService(service)
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
        homeHref="../"
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        currentLang={language}
        onLangChange={handleLanguageChange}
        t={t}
        onDirectContactClick={handleGeneralContact}
        onFreeAdvisoryClick={handleFreeAdvisory}
      />

      <main id="main-content" className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-2">
          <a
            href="../"
            onClick={() => trackEvent('catalog_back_home')}
            className="hero-enter hero-enter-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.catalogPage.backHome}
          </a>

          <h1 className="hero-enter hero-enter-2 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] bg-clip-text text-transparent">
            {t.catalogPage.titleLead} {t.catalogPage.titleAccent}
          </h1>

          <p className="hero-enter hero-enter-3 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            {t.catalogPage.description}
          </p>
        </section>

        <section id="servicios" data-reveal className="space-y-8 scroll-mt-28">
          <ServiceFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

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

        <FreeAdvisoryBanner tAdvisory={t.freeAdvisory} />
      </main>

      <Footer tFooter={t.footer} />

      <WhatsAppFloat label={t.nav.whatsappFloatLabel} message={t.nav.whatsappFloatMessage} />
    </div>
  )
}

export default CatalogoPage
