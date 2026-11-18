import type { Locale, Text } from '../data/types.js';

type Listener = (locale: Locale) => void;

const STORAGE_KEY = 'portfolio:locale';
const HTML_LANG: Record<Locale, string> = { pt: 'pt-BR', en: 'en' };

/**
 * Holds the active locale and notifies subscribers when it changes.
 * The choice is persisted per browser when storage is available.
 */
export class I18n {
  #locale: Locale;
  readonly #listeners = new Set<Listener>();

  constructor(fallback: Locale = 'pt') {
    this.#locale = I18n.#readStoredLocale() ?? fallback;
    document.documentElement.lang = HTML_LANG[this.#locale];
  }

  get locale(): Locale {
    return this.#locale;
  }

  setLocale(locale: Locale): void {
    if (locale === this.#locale) return;
    this.#locale = locale;
    document.documentElement.lang = HTML_LANG[locale];
    I18n.#storeLocale(locale);
    // Iterate over a copy: components re-render and re-subscribe while we notify.
    [...this.#listeners].forEach((listener) => listener(locale));
  }

  t(text: Text): string {
    return typeof text === 'string' ? text : text[this.#locale];
  }

  subscribe(listener: Listener): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  static #readStoredLocale(): Locale | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'pt' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }

  static #storeLocale(locale: Locale): void {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable (private mode, sandboxed frame) */
    }
  }
}

export const i18n = new I18n();
