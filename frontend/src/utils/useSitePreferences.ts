import { useEffect, useState } from 'react'
import { detectInitialCurrency } from '../data/currency'
import { detectInitialLanguage } from '../utils/i18nDetector'
import { TRANSLATIONS } from '../data/translations'
import { trackEvent } from '../utils/analytics'
import type { ThemeMode } from '../types/theme'
import type { Language } from '../types/i18n'
import type { CurrencyCode } from '../types/currency'

export function useSitePreferences() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('tether_theme') as ThemeMode
    return saved || 'dark-cyan'
  })

  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage())

  const [currency, setCurrency] = useState<CurrencyCode>(() => detectInitialCurrency())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tether_theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('tether_lang', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    localStorage.setItem('tether_currency', currency)
  }, [currency])

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

  return {
    theme,
    language,
    currency,
    t: TRANSLATIONS[language],
    handleThemeChange,
    handleLanguageChange,
    handleCurrencyChange,
  }
}
