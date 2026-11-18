export interface TypewriterOptions {
  typeDelay: number;
  deleteDelay: number;
  holdDelay: number;
}

const DEFAULT_OPTIONS: TypewriterOptions = { typeDelay: 65, deleteDelay: 30, holdDelay: 1100 };

/**
 * Types and erases a list of words in a loop.
 *
 * Long words are scaled down so they always fit on a single line
 * of the parent element instead of wrapping.
 */
export class Typewriter {
  readonly #target: HTMLElement;
  readonly #words: string[];
  readonly #options: TypewriterOptions;
  readonly #canvas = document.createElement('canvas').getContext('2d');

  #wordIndex = 0;
  #charIndex = 0;
  #deleting = false;
  #timer?: number;

  constructor(target: HTMLElement, words: string[], options: Partial<TypewriterOptions> = {}) {
    this.#target = target;
    this.#words = words;
    this.#options = { ...DEFAULT_OPTIONS, ...options };
  }

  start(): this {
    if (this.#words.length === 0) return this;
    this.#tick();
    window.addEventListener('resize', this.#handleResize);
    return this;
  }

  stop(): void {
    window.clearTimeout(this.#timer);
    window.removeEventListener('resize', this.#handleResize);
  }

  get #currentWord(): string {
    return this.#words[this.#wordIndex % this.#words.length];
  }

  #tick = (): void => {
    const word = this.#currentWord;
    if (this.#charIndex === 0 && !this.#deleting) this.#fit(word);

    this.#target.textContent = word.slice(0, this.#charIndex);

    if (!this.#deleting && this.#charIndex < word.length) {
      this.#charIndex++;
    } else if (this.#deleting && this.#charIndex > 0) {
      this.#charIndex--;
    } else if (!this.#deleting) {
      this.#deleting = true;
      this.#schedule(this.#options.holdDelay);
      return;
    } else {
      this.#deleting = false;
      this.#wordIndex++;
    }

    this.#schedule(this.#deleting ? this.#options.deleteDelay : this.#options.typeDelay);
  };

  #schedule(delay: number): void {
    this.#timer = window.setTimeout(this.#tick, delay);
  }

  #handleResize = (): void => this.#fit(this.#currentWord);

  /** Shrinks the font size only when the word is wider than the available space. */
  #fit(word: string): void {
    const line = this.#target.parentElement;
    if (!line || !this.#canvas) return;

    this.#target.style.fontSize = '';
    const style = getComputedStyle(this.#target);
    this.#canvas.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    const needed = this.#canvas.measureText(word).width + 10;
    const siblingsWidth = [...line.children]
      .filter((child) => child !== this.#target)
      .reduce((total, child) => total + (child as HTMLElement).offsetWidth, 0);
    const gap = parseFloat(getComputedStyle(line).columnGap) || 0;
    const available = line.clientWidth - siblingsWidth - gap - 4;

    if (needed > available) {
      this.#target.style.fontSize = `${(parseFloat(style.fontSize) * available) / needed}px`;
    }
  }
}
