type EventParams = Record<string, string | number | boolean>

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Initializes Google Analytics 4 (gtag) only when a measurement ID is provided
 * via the VITE_GA_MEASUREMENT_ID environment variable. Without it, analytics is
 * a no-op so local development and previews stay clean.
 */
export function initAnalytics(): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return
  if (document.getElementById('ga-script')) return

  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)
}

/**
 * Sends a GA4 event. Falls back to a console log in development when no
 * measurement ID is configured, which helps validate click tracking locally.
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', name, params)
    return
  }

  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, params)
  }
}
