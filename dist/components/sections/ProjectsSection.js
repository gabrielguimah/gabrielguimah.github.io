import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';
import { projects } from '../../data/projects.js';
import { icon } from '../../icons/index.js';
import { sectionHeading } from '../ui/SectionHeading.js';
import { tagList } from '../ui/TagList.js';
/** `<projects-section>` — product cards, with demo and source links when available. */
export class ProjectsSection extends Component {
    template() {
        return html `
      <section id="projects" class="section">
        <div class="container">
          ${sectionHeading('projects')}
          <div class="projects">
            ${projects.map((project) => this.#card(project))}
          </div>
        </div>
      </section>
    `;
    }
    #card(project) {
        return html `
      <article class="card project-card ${project.featured ? 'project-card--featured' : ''} reveal">
        <div class="project-card__body">
          <div class="project-card__top">
            ${icon(project.icon, 'project-card__icon')}
            <span class="project-card__company">${this.t(project.company)}</span>
          </div>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${this.t(project.description)}</p>
          ${tagList(project.tags)}
          ${project.links && this.#links(project.links)}
        </div>
        ${project.image && this.#preview(project)}
      </article>
    `;
    }
    #preview(project) {
        const href = project.links?.demo;
        const image = html `<img src="${project.image}" alt="${project.title}" loading="lazy" width="1045" height="582" />`;
        return html `
      <figure class="project-card__preview">
        ${href ? html `<a href="${href}" target="_blank" rel="noopener" tabindex="-1">${image}</a>` : image}
      </figure>
    `;
    }
    #links(links) {
        return html `
      <div class="project-card__links">
        ${links.demo &&
            html `<a class="project-card__link" href="${links.demo}" target="_blank" rel="noopener">
          ${icon('external')}<span>${this.t(copy.projects.demo)}</span>
        </a>`}
        ${links.repository &&
            html `<a class="project-card__link" href="${links.repository}" target="_blank" rel="noopener">
          ${icon('github')}<span>${this.t(copy.projects.repository)}</span>
        </a>`}
      </div>
    `;
    }
}
