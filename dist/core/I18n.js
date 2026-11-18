const STORAGE_KEY = 'portfolio:locale';
const HTML_LANG = { pt: 'pt-BR', en: 'en' };
/**
 * Holds the active locale and notifies subscribers when it changes.
 * The choice is persisted per browser when storage is available.
 */
export class I18n {
    #locale;
    #listeners = new Set();
    constructor(fallback = 'pt') {
        this.#locale = I18n.#readStoredLocale() ?? fallback;
        document.documentElement.lang = HTML_LANG[this.#locale];
    }
    get locale() {
        return this.#locale;
    }
    setLocale(locale) {
        if (locale === this.#locale)
            return;
        this.#locale = locale;
        document.documentElement.lang = HTML_LANG[locale];
        I18n.#storeLocale(locale);
        // Iterate over a copy: components re-render and re-subscribe while we notify.
        [...this.#listeners].forEach((listener) => listener(locale));
    }
    t(text) {
        return typeof text === 'string' ? text : text[this.#locale];
    }
    subscribe(listener) {
        this.#listeners.add(listener);
        return () => this.#listeners.delete(listener);
    }
    static #readStoredLocale() {
        try {
            const value = localStorage.getItem(STORAGE_KEY);
            return value === 'pt' || value === 'en' ? value : null;
        }
        catch {
            return null;
        }
    }
    static #storeLocale(locale) {
        try {
            localStorage.setItem(STORAGE_KEY, locale);
        }
        catch {
            /* storage unavailable (private mode, sandboxed frame) */
        }
    }
}
export const i18n = new I18n();
