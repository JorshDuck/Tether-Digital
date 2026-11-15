import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import type { CurrencyCode } from '../../types/currency'
import type { Language } from '../../types/i18n'
import { CURRENCIES } from '../../data/currency'
import { cn } from '../../lib/utils'

interface CurrencySelectorProps {
  currentCurrency: CurrencyCode
  onCurrencyChange: (currency: CurrencyCode) => void
  currentLang?: Language
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currentCurrency,
  onCurrencyChange,
  currentLang = 'es',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currencyList: CurrencyCode[] = ['USD', 'EUR', 'BOB', 'CLP', 'COP', 'PEN', 'MXN', 'ARS', 'UYU']
  const current = CURRENCIES[currentCurrency] || CURRENCIES.BOB

  // Close on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="currency-listbox"
        aria-label={currentLang === 'en' ? 'Change currency' : 'Cambiar moneda'}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[var(--bg-inner)] border border-[var(--border-card)] shadow-inner text-xs font-bold text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all cursor-pointer select-none"
        title={currentLang === 'en' ? 'Change currency' : 'Cambiar moneda'}
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span>{current.code}</span>
        <span className="text-[11px] text-[var(--accent-primary)] font-mono">
          ({current.symbol})
        </span>
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200',
            isOpen ? 'rotate-180' : ''
          )}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div
          id="currency-listbox"
          role="listbox"
          aria-label={currentLang === 'en' ? 'Select currency' : 'Seleccionar moneda'}
          className="absolute right-0 mt-2 w-60 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-2xl backdrop-blur-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-card)] mb-1">
            {currentLang === 'en' ? 'Select Currency' : 'Seleccionar Moneda'}
          </div>

          <div className="space-y-0.5 max-h-72 overflow-y-auto">
            {currencyList.map((code) => {
              const item = CURRENCIES[code]
              const isSelected = currentCurrency === code

              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onCurrencyChange(code)
                    setIsOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-colors cursor-pointer text-left',
                    isSelected
                      ? 'bg-[var(--accent-badge-bg)] text-[var(--accent-primary)] font-bold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-inner)]'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{item.flag}</span>
                    <div className="flex flex-col">
                      <span className="leading-tight">
                        {currentLang === 'en' && item.countryEn ? item.countryEn : item.country}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">
                        {currentLang === 'en' && item.nameEn ? item.nameEn : item.name} ({item.symbol})
                      </span>
                    </div>
                  </div>

                  {isSelected && <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
