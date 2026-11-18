import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { about } from '../../data/about.js';
import { sectionHeading } from '../ui/SectionHeading.js';

/** `<about-section>` — short bio and key numbers. */
export class AboutSection extends Component {
  protected template(): string {
    return html`
      <section id="about" class="section">
        <div class="container">
          ${sectionHeading('about')}
          <div class="about">
            <div class="about__bio reveal">
              ${about.paragraphs.map((paragraph) => html`<p>${this.t(paragraph)}</p>`)}
            </div>
            <dl class="about__stats reveal">
              ${about.stats.map(
                (stat) => html`
                  <div class="stat">
                    <dt class="stat__value">${stat.value}</dt>
                    <dd class="stat__label">${this.t(stat.label)}</dd>
                  </div>
                `,
              )}
            </dl>
          </div>
        </div>
      </section>
    `;
  }
}
