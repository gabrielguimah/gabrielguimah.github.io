import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { projects } from '../../data/projects.js';
import { icon } from '../../icons/index.js';
import { sectionHeading } from '../ui/SectionHeading.js';
import { tagList } from '../ui/TagList.js';

/** `<projects-section>` — product cards. */
export class ProjectsSection extends Component {
  protected template(): string {
    return html`
      <section id="projects" class="section">
        <div class="container">
          ${sectionHeading('projects')}
          <div class="projects">
            ${projects.map(
              (project) => html`
                <article class="card project-card reveal">
                  <div class="project-card__top">
                    ${icon(project.icon, 'project-card__icon')}
                    <span class="project-card__company">${project.company}</span>
                  </div>
                  <h3 class="project-card__title">${project.title}</h3>
                  <p class="project-card__description">${this.t(project.description)}</p>
                  ${tagList(project.tags)}
                </article>
              `,
            )}
          </div>
        </div>
      </section>
    `;
  }
}
