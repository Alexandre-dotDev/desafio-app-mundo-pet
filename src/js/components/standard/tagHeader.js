import { myCreateElement } from "./myCreateElement";
/** Componente de tag "header" que cria a estrutura do html.
 * @typedef {Object} tagHeader
 * @property {string[]} [classes=[]] - Lista de classes CSS a serem adicionadas.
 * @property {HTMLElement[]} [children=[]] - Elementos filhos a serem adicionados.
 * @returns {HTMLElement}
 */

export function tagHeader({ childrens = [], class_list = [] }) {
  const header = myCreateElement({
    tag: "header",
    classes: class_list,
    children: childrens,
  });

  return header;
}
