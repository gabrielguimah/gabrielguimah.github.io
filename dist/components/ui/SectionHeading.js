import { i18n } from '../../core/I18n.js';
import { html } from '../../core/template.js';
import { getSection } from '../../data/sections.js';
/** Numbered section title, e.g. "01. Sobre mim ————". */
export function sectionHeading(id) {
    const { section, number } = getSection(id);
    return html `
    <div class="section-heading reveal">
      <span class="section-heading__number">${number}.</span>
      <h2 class="section-heading__title">${i18n.t(section.title)}</h2>
      <span class="section-heading__line" aria-hidden="true"></span>
    </div>
  `;
}
