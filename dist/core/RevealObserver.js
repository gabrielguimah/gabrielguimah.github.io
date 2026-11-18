/**
 * Fades `.reveal` elements in the first time they scroll into view.
 */
export class RevealObserver {
    static SELECTOR = '.reveal';
    static VISIBLE_CLASS = 'is-visible';
    #observer;
    constructor(threshold = 0.12) {
        this.#observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting)
                    continue;
                entry.target.classList.add(RevealObserver.VISIBLE_CLASS);
                this.#observer.unobserve(entry.target);
            }
        }, { threshold });
    }
    observe(root) {
        root.querySelectorAll(RevealObserver.SELECTOR).forEach((element) => this.#observer.observe(element));
    }
    /** Used after a re-render (e.g. language switch) so content does not animate again. */
    showAll(root) {
        root.querySelectorAll(RevealObserver.SELECTOR).forEach((element) => {
            element.classList.add(RevealObserver.VISIBLE_CLASS);
        });
    }
}
export const revealObserver = new RevealObserver();
