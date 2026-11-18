import { Component } from '../../core/Component.js';
import { i18n } from '../../core/I18n.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';
import { icon } from '../../icons/index.js';
const OPTIONS = [
    { locale: 'pt', label: 'PT', name: 'Português', flag: 'flag-br' },
    { locale: 'en', label: 'EN', name: 'English', flag: 'flag-us' },
];
/** `<language-switch>` — PT / EN toggle with flags. */
export class LanguageSwitch extends Component {
    template() {
        return html `
      <div class="language-switch" role="group" aria-label="${this.t(copy.language)}">
        ${OPTIONS.map((option) => html `
            <button
              type="button"
              class="language-switch__option ${option.locale === i18n.locale ? 'is-active' : ''}"
              data-locale="${option.locale}"
              aria-pressed="${option.locale === i18n.locale}"
              aria-label="${option.name}"
            >
              ${icon(option.flag, 'flag')}${option.label}
            </button>
          `)}
      </div>
    `;
    }
    onMount() {
        this.addEventListener('click', (event) => {
            const button = event.target.closest('[data-locale]');
            if (button)
                i18n.setLocale(button.dataset.locale);
        });
    }
}
