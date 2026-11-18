import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';
import { sections } from '../../data/sections.js';

/** `<site-header>` — sticky top bar with navigation, language switch and mobile menu. */
export class SiteHeader extends Component {
  #menuOpen = false;

  protected template(): string {
    return html`
      <header class="site-header">
        <nav class="site-header__nav container" aria-label="Main">
          <a href="#" class="site-header__logo">gabriel<span>.</span>dev</a>
          <button type="button" class="site-header__toggle" data-action="toggle-menu"
            aria-label="${this.t(copy.menu)}" aria-expanded="${this.#menuOpen}" aria-controls="site-menu">☰</button>
          <div class="site-header__menu ${this.#menuOpen ? 'is-open' : ''}" id="site-menu">
            ${sections.map((section) => html`<a href="#${section.id}" class="site-header__link">${this.t(section.navLabel)}</a>`)}
            <language-switch></language-switch>
          </div>
        </nav>
      </header>
    `;
  }

  protected onMount(): void {
    this.addEventListener('click', this.#handleClick);
    window.addEventListener('scroll', this.#handleScroll, { passive: true });
    this.#handleScroll();
  }

  protected onRender(): void {
    this.#handleScroll();
  }

  protected onUnmount(): void {
    window.removeEventListener('scroll', this.#handleScroll);
  }

  #handleClick = (event: Event): void => {
    const target = event.target as Element;
    if (target.closest('[data-action="toggle-menu"]')) {
      this.#setMenuOpen(!this.#menuOpen);
    } else if (target.closest('.site-header__link')) {
      this.#setMenuOpen(false);
    }
  };

  #handleScroll = (): void => {
    this.querySelector('.site-header')?.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  #setMenuOpen(open: boolean): void {
    this.#menuOpen = open;
    this.querySelector('.site-header__menu')?.classList.toggle('is-open', open);
    this.querySelector('[data-action="toggle-menu"]')?.setAttribute('aria-expanded', String(open));
  }
}
