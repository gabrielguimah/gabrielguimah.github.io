import type { Text } from '../data/types.js';
import { i18n } from './I18n.js';
import { revealObserver } from './RevealObserver.js';

/**
 * Base class for every custom element on the page.
 *
 * Components render into the light DOM so the global stylesheet applies,
 * and they re-render automatically when the locale changes.
 * Event listeners should be attached to the host in `onMount` (event
 * delegation), because the inner markup is replaced on every render.
 */
export abstract class Component extends HTMLElement {
  #unsubscribe?: () => void;
  #hasRendered = false;

  connectedCallback(): void {
    this.render();
    this.#unsubscribe = i18n.subscribe(() => this.render());
    this.onMount();
  }

  disconnectedCallback(): void {
    this.#unsubscribe?.();
    this.onUnmount();
  }

  /** Returns the component markup for the current locale. */
  protected abstract template(): string;

  /** Runs once, after the first render. */
  protected onMount(): void {}

  /** Runs after every render. */
  protected onRender(): void {}

  /** Runs when the element leaves the document. */
  protected onUnmount(): void {}

  protected t(text: Text): string {
    return i18n.t(text);
  }

  protected render(): void {
    this.innerHTML = this.template();
    if (this.#hasRendered) {
      revealObserver.showAll(this);
    } else {
      revealObserver.observe(this);
      this.#hasRendered = true;
    }
    this.onRender();
  }
}
