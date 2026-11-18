import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { experience } from '../../data/experience.js';
import { icon } from '../../icons/index.js';
import { sectionHeading } from '../ui/SectionHeading.js';
import { tagList } from '../ui/TagList.js';
/** `<experience-section>` — work history as a vertical timeline. */
export class ExperienceSection extends Component {
    template() {
        return html `
      <section id="experience" class="section">
        <div class="container">
          ${sectionHeading('experience')}
          <ol class="timeline">
            ${experience.map((job) => this.#job(job))}
          </ol>
        </div>
      </section>
    `;
    }
    #job(job) {
        return html `
      <li class="job reveal">
        <span class="job__period">${this.t(job.period)}</span>
        <h3 class="job__title">${job.role} <em>@ ${job.company}</em></h3>
        <p class="job__summary">${this.t(job.summary)}</p>
        <ul class="job__highlights">
          ${job.highlights.map((highlight) => html `<li>${this.t(highlight)}</li>`)}
        </ul>
        ${job.showcase && this.#showcase(job.showcase)}
        ${tagList(job.tags, 'job__tags')}
      </li>
    `;
    }
    #showcase(showcase) {
        return html `
      <h4 class="job__subtitle">${icon(showcase.icon)}<span>${this.t(showcase.title)}</span></h4>
      <ul class="showcase showcase--${showcase.variant}">
        ${showcase.items.map((item) => html `<li>${this.t(item)}</li>`)}
      </ul>
    `;
    }
}
