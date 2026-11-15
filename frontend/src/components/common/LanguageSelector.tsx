import React from 'react'
import type { Language } from '../../types/i18n'
import { cn } from '../../lib/utils'

interface LanguageSelectorProps {
  currentLang: Language
  onLangChange: (lang: Language) => void
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLangChange }) => {
  return (
    <div className="flex items-center p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-inner">
      <button
        type="button"
        onClick={() => onLangChange('es')}
        aria-label="Cambiar idioma a español"
        aria-pressed={currentLang === 'es'}
        className={cn(
          'px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer select-none',
          currentLang === 'es'
            ? 'bg-[var(--bg-card-hover)] text-[var(--accent-primary)] shadow-sm border border-[var(--border-accent)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-badge-bg)]'
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => onLangChange('en')}
        aria-label="Switch language to English"
        aria-pressed={currentLang === 'en'}
        className={cn(
          'px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer select-none',
          currentLang === 'en'
            ? 'bg-[var(--bg-card-hover)] text-[var(--accent-primary)] shadow-sm border border-[var(--border-accent)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-badge-bg)]'
        )}
      >
        EN
      </button>
    </div>
  )
}
