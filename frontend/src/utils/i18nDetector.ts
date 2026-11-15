import type { Language } from '../types/i18n'

const LANGUAGE_STORAGE_KEY = 'tether_lang'

/**
 * Recupera la preferencia de idioma guardada en localStorage.
 * Devuelve null si no existe o contiene un valor no válido.
 */
export function readSavedLanguage(): Language | null {
  if (typeof window === 'undefined') return null

  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === 'es' || saved === 'en') {
      return saved
    }
  } catch {
    // localStorage puede estar bloqueado por el navegador
  }

  return null
}

/**
 * Detección automática del idioma inicial con jerarquía de prioridades:
 * 1. Preferencia previa guardada en localStorage ('tether_lang')
 * 2. Idioma preferido reportado por el navegador/sistema (navigator.languages / navigator.language)
 * 3. Inferencia suplementaria por zona horaria (Intl.DateTimeFormat)
 * 4. Idioma fallback por defecto ('es')
 */
export function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es'

  try {
    // 1. Preferencia previa guardada en localStorage
    const saved = readSavedLanguage()
    if (saved) {
      return saved
    }

    // 2. Idiomas preferidos por el navegador/sistema operativo (navigator.languages o navigator.language)
    const browserLanguages: string[] =
      Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages.map((l) => l.toLowerCase())
        : [(navigator.language || '').toLowerCase()]

    for (const lang of browserLanguages) {
      if (lang.startsWith('es')) return 'es'
      if (lang.startsWith('en')) return 'en'
    }

    // 3. Inferencia suplementaria por zona horaria de la región
    const timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase()

    // Regiones principalmente angloparlantes
    if (
      timeZone.includes('america/new_york') ||
      timeZone.includes('america/chicago') ||
      timeZone.includes('america/los_angeles') ||
      timeZone.includes('america/denver') ||
      timeZone.includes('america/phoenix') ||
      timeZone.includes('america/toronto') ||
      timeZone.includes('america/vancouver') ||
      timeZone.includes('europe/london') ||
      timeZone.includes('australia/')
    ) {
      return 'en'
    }

    // Regiones principalmente hispanohablantes
    if (
      timeZone.includes('america/la_paz') ||
      timeZone.includes('america/bogota') ||
      timeZone.includes('america/santiago') ||
      timeZone.includes('america/lima') ||
      timeZone.includes('america/mexico') ||
      timeZone.includes('america/buenos_aires') ||
      timeZone.includes('europe/madrid')
    ) {
      return 'es'
    }
  } catch {
    // Fallback seguro ante cualquier bloqueo del navegador
  }

  // 4. Idioma por defecto
  return 'es'
}
