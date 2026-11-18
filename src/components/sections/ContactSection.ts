import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';
import { profile } from '../../data/profile.js';
import { getSection } from '../../data/sections.js';
import { icon } from '../../icons/index.js';

/** `<contact-section>` — closing call-to-action with e-mail and WhatsApp. */
export class ContactSection extends Component {
  protected template(): string {
    const { section, number } = getSection('contact');

    return html`
      <section id="contact" class="section">
        <div class="contact container reveal">
          <span class="contact__eyebrow">${number}. ${this.t(section.title)}</span>
          <h2 class="contact__title">${this.t(copy.contact.heading)}</h2>
          <p class="contact__message">${this.t(copy.contact.message)}</p>

          <div class="contact__actions">
            <a href="mailto:${profile.email}" class="button button--primary">${icon('mail')}<span>${this.t(copy.contact.email)}</span></a>
            <a href="${profile.phone.whatsapp}" target="_blank" rel="noopener" class="button button--ghost">${icon('whatsapp')}<span>WhatsApp</span></a>
          </div>

          <div class="contact__details">
            <button type="button" class="contact__detail" data-copy="${profile.email}" title="${this.t(copy.contact.copyHint)}">${profile.email}</button>
            <span class="contact__separator" aria-hidden="true">·</span>
            <a class="contact__detail" href="${profile.phone.whatsapp}" target="_blank" rel="noopener">
              ${icon('flag-br', 'flag')}<span>${profile.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  protected onMount(): void {
    this.addEventListener('click', (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('[data-copy]');
      if (button) void this.#copy(button);
    });
  }

  async #copy(button: HTMLButtonElement): Promise<void> {
    const value = button.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = this.t(copy.contact.copied);
      window.setTimeout(() => (button.textContent = value), 1500);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }
}
