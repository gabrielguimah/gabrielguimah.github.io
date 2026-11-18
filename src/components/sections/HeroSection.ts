import { Component } from '../../core/Component.js';
import { html } from '../../core/template.js';
import { Typewriter } from '../../core/Typewriter.js';
import { copy } from '../../data/copy.js';
import { profile } from '../../data/profile.js';
import { skillGroups } from '../../data/skills.js';
import { icon } from '../../icons/index.js';

/** `<hero-section>` — intro, rotating skill, call-to-actions and profile photo. */
export class HeroSection extends Component {
  #typewriter?: Typewriter;

  protected template(): string {
    const [firstName, ...lastNames] = profile.name.split(' ');

    return html`
      <div class="hero container">
        <div class="hero__grid">
          <div class="hero__content">
            <p class="hero__status reveal"><span class="hero__status-dot"></span>${this.t(profile.availability)}</p>

            <h1 class="hero__title reveal">
              ${this.t(profile.greeting)}<br />
              <span class="hero__name">${firstName} ${lastNames.join(' ')}.</span>
            </h1>

            <p class="hero__role reveal">
              <span>${profile.role}</span>
              <span class="typewriter"><span class="typewriter__prompt">&gt;</span><span class="typewriter__text" data-typewriter></span></span>
            </p>

            <p class="hero__location reveal">${icon('pin')}${profile.location}</p>
            <p class="hero__summary reveal">${this.t(profile.summary)}</p>

            <div class="hero__actions reveal">
              <a href="#contact" class="button button--primary">${icon('chat')}<span>${this.t(copy.hero.talk)}</span></a>
              <a href="${profile.resume}" target="_blank" rel="noopener" class="button button--ghost">${icon('download')}<span>${this.t(copy.hero.resume)}</span></a>
            </div>

            <ul class="hero__socials reveal">
              ${profile.socials.map(
                (social) => html`
                  <li><a href="${social.href}" target="_blank" rel="noopener" aria-label="${social.label}">${icon(social.icon)}</a></li>
                `,
              )}
            </ul>
          </div>

          <div class="avatar reveal">
            <span class="avatar__blob" aria-hidden="true"></span>
            <img class="avatar__photo" src="${profile.photo}" alt="${profile.name}" width="320" height="320" />
          </div>
        </div>
      </div>
    `;
  }

  protected onRender(): void {
    this.#typewriter?.stop();
    const target = this.querySelector<HTMLElement>('[data-typewriter]');
    if (!target) return;

    const words = skillGroups.flatMap((group) => group.skills.map((skill) => this.t(skill.label)));
    this.#typewriter = new Typewriter(target, words).start();
  }

  protected onUnmount(): void {
    this.#typewriter?.stop();
  }
}
