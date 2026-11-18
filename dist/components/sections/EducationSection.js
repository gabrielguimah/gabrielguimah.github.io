import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { education, languages } from '../../data/education.js';
import { icon } from '../../icons/index.js';
import { sectionHeading } from '../ui/SectionHeading.js';
import { tagList } from '../ui/TagList.js';
/** `<education-section>` — degrees and spoken languages. */
export class EducationSection extends Component {
    template() {
        return html `
      <section id="education" class="section">
        <div class="container">
          ${sectionHeading('education')}
          <div class="education">
            ${education.map((item) => html `
                <article class="card education-card reveal">
                  <div class="education-card__top">
                    <span class="icon-badge">${icon(item.icon)}</span>
                    <span class="education-card__period">${item.period}</span>
                  </div>
                  <h3 class="education-card__degree">${this.t(item.degree)}</h3>
                  <p class="education-card__school">${this.t(item.school)}</p>
                  ${tagList(item.tags)}
                </article>
              `)}
          </div>
          <ul class="languages reveal">
            ${languages.map((language) => html `<li><strong>${this.t(language.name)}</strong> ${this.t(language.level)}</li>`)}
          </ul>
        </div>
      </section>
    `;
    }
}
