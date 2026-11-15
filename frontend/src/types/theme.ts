export type ThemeMode = 'dark-orange' | 'dark-cyan' | 'light'

export interface ThemeOption {
  id: ThemeMode
  label: string
  shortLabel: string
  icon: 'Flame' | 'Sparkles' | 'Sun'
  previewColor: string
}
