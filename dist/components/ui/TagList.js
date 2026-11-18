import { i18n } from '../../core/I18n.js';
import { html } from '../../core/template.js';
/** Row of rounded monospace tags used under jobs, projects and courses. */
export function tagList(tags, className = '') {
    if (tags.length === 0)
        return '';
    return html `
    <ul class="tag-list ${className}">
      ${tags.map((tag) => html `<li class="tag">${i18n.t(tag)}</li>`)}
    </ul>
  `;
}
