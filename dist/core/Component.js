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
export class Component extends HTMLElement {
    #unsubscribe;
    #hasRendered = false;
    connectedCallback() {
        this.render();
        this.#unsubscribe = i18n.subscribe(() => this.render());
        this.onMount();
    }
    disconnectedCallback() {
        this.#unsubscribe?.();
        this.onUnmount();
    }
    /** Runs once, after the first render. */
    onMount() { }
    /** Runs after every render. */
    onRender() { }
    /** Runs when the element leaves the document. */
    onUnmount() { }
    t(text) {
        return i18n.t(text);
    }
    render() {
        this.innerHTML = this.template();
        if (this.#hasRendered) {
            revealObserver.showAll(this);
        }
        else {
            revealObserver.observe(this);
            this.#hasRendered = true;
        }
        this.onRender();
    }
}
