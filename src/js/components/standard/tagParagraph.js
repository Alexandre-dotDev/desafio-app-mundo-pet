import { myCreateElement } from "./myCreateElement";
/**
 * @typedef {Object} tagParagraph
 * @property {string[]} [classes=[]] - Lista de classes CSS a serem adicionadas.
 * @property {string} [text=""] - Texto interno do elemento.
 * @returns {HTMLElement}
 */
export function tagParagraph({ text = "", class_lis = [] }) {
  const p = myCreateElement({
    tag: "p",
    textContent: text,
    classes: class_lis,
  });

  return p;
}
