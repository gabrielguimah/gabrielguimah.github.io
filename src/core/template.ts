type Value = string | number | boolean | null | undefined | Value[];

/**
 * Tagged template for component markup. Arrays are joined and
 * `false` / `null` / `undefined` render nothing, which keeps
 * conditionals and `.map()` calls readable inside templates.
 *
 * Values are inserted as-is: only use it with trusted content from `src/data`.
 */
export function html(strings: TemplateStringsArray, ...values: Value[]): string {
  return strings.reduce((output, chunk, index) => output + chunk + stringify(values[index]), '');
}

function stringify(value: Value): string {
  if (Array.isArray(value)) return value.map(stringify).join('');
  if (value === null || value === undefined || value === false) return '';
  return String(value);
}
