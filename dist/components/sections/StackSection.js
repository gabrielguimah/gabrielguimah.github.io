import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';
import { skillGroups } from '../../data/skills.js';
import { icon } from '../../icons/index.js';
import { sectionHeading } from '../ui/SectionHeading.js';
/** `<stack-section>` — skills grouped by area, featured ones highlighted. */
export class StackSection extends Component {
    template() {
        return html `
      <section id="stack" class="section">
        <div class="container">
          ${sectionHeading('stack')}
          <p class="stack-note reveal"><span class="stack-note__swatch" aria-hidden="true"></span>${this.t(copy.stack.note)}</p>
          <div class="stack">
            ${skillGroups.map((group) => this.#group(group))}
          </div>
        </div>
      </section>
    `;
    }
    #group(group) {
        return html `
      <div class="stack__row reveal">
        <div class="stack__head">
          <span class="icon-badge icon-badge--small">${icon(group.icon)}</span>
          <h3 class="stack__title">${this.t(group.title)}</h3>
          <span class="stack__count">${group.skills.length}</span>
        </div>
        <ul class="stack__skills">
          ${group.skills.map((skill) => html `<li class="skill ${skill.featured ? 'skill--featured' : ''}">${this.t(skill.label)}</li>`)}
        </ul>
      </div>
    `;
    }
}
