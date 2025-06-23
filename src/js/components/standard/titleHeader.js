import { myCreateElement } from "./myCreateElement";
/** Componente "header" é uma estrutura pronta ata criar title como: h1, h2,h3 e etc.
 * @typedef {Object} titleHeader
 * @property {string} [tag="h1"] - A tag HTML a ser criada (ex: "h1", "h2", "h3").
 * @property {string[]} [classes=[]] - Lista de classes CSS a serem adicionadas.
 * @property {string} [text=""] - Texto interno do elemento.
 * @returns {HTMLElement}
 */
export function titleHeader({ tag = "", text = "", class_lis = [] }) {
  const h = myCreateElement({
    tag: tag,
    textContent: text,
    classes: class_lis,
  });

  return h;
}
