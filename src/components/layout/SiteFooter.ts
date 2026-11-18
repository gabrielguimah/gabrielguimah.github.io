import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { copy } from '../../data/copy.js';

/** `<site-footer>` */
export class SiteFooter extends Component {
  protected template(): string {
    return html`
      <footer class="site-footer">
        <div class="container">${this.t(copy.footer)} · © ${new Date().getFullYear()}</div>
      </footer>
    `;
  }
}
