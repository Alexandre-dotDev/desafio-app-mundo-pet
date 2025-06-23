import { myCreateElement } from "./myCreateElement";
/**
 * @typedef {Object} tagInput
 * @property {string[]} [classes=[]] - Lista de classes CSS a serem adicionadas.
 * @property {string} [text=""] - Texto interno do elemento.
 * @property {Object.<string, string>} [attributes={}] - Atributos HTML como id, src, alt, etc.
 * @property {Object.<string, (event: Event) => void>} [events={}] - Eventos e seus respectivos manipuladores.
 * @returns {HTMLElement}
 */
export function tagInput({ atributes = {}, text = "", event = {} }) {
  const input = myCreateElement({
    tag: "input",
    textContent: text,
    attributes: atributes,
  });

  return input;
}
