import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, HeartHandshake, Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { TetherLogo } from './TetherLogo'
import { ThemeSelector } from './ThemeSelector'
import { LanguageSelector } from './LanguageSelector'
import type { ThemeMode } from '../../types/theme'
import type { Language, TranslationDictionary } from '../../types/i18n'

interface HeaderProps {
  currentTheme: ThemeMode
  onThemeChange: (theme: ThemeMode) => void
  currentLang: Language
  onLangChange: (lang: Language) => void
  t: TranslationDictionary
  onDirectContactClick: () => void
  onFreeAdvisoryClick: () => void
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onThemeChange,
  currentLang,
  onLangChange,
  t,
  onDirectContactClick,
  onFreeAdvisoryClick,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-card)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand identity: Animated Io Wisp Inspired Logo */}
        <div className="flex items-center gap-3">
          <TetherLogo size={50} showText={true} />
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-1.5 sm:gap-2.5">
          {/* Theme Selector (Ember / Cyan / Claro) */}
          <ThemeSelector
            currentTheme={currentTheme}
            onThemeChange={onThemeChange}
            labels={t.themes}
          />

          {/* Language Switcher (ES | EN) */}
          <LanguageSelector
            currentLang={currentLang}
            onLangChange={onLangChange}
          />

          {/* Free Advisory CTA (Highlighted reassurance) */}
          <Button
            variant="outline"
            size="sm"
            onClick={onFreeAdvisoryClick}
            className="border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.nav.freeAdvisoryBtn}</span>
          </Button>

          {/* Primary CTA Button */}
          <Button
            variant="primary"
            size="sm"
            onClick={onDirectContactClick}
            className="flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.quoteProject}</span>
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-1.5" ref={mobileRef}>
          <Button
            variant="primary"
            size="sm"
            onClick={onDirectContactClick}
            className="flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.shortQuote}</span>
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer select-none"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {mobileOpen && (
            <div
              id="mobile-menu"
              aria-label="Menú de opciones"
              className="absolute left-4 right-4 top-full mt-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-2xl backdrop-blur-xl p-4 z-50 space-y-3 animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="flex flex-col items-start gap-2">
                <ThemeSelector
                  currentTheme={currentTheme}
                  onThemeChange={onThemeChange}
                  labels={t.themes}
                />
                <LanguageSelector
                  currentLang={currentLang}
                  onLangChange={onLangChange}
                />
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    onFreeAdvisoryClick()
                    setMobileOpen(false)
                  }}
                  className="w-full justify-center border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10"
                >
                  <HeartHandshake className="w-4 h-4 text-emerald-500" />
                  <span>{t.nav.freeAdvisoryBtn}</span>
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onDirectContactClick()
                    setMobileOpen(false)
                  }}
                  className="w-full justify-center"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.nav.quoteProject}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
