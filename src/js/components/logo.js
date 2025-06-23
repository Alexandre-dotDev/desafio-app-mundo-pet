import { myCreateElement } from "./standard/myCreateElement";
import { wrapper } from "./standard/wrapper";
/** Componente "logo" com imagem + texto, já formatado com classes e estrutura pronta.
 * @param {string} text - Texto que será exibido ao lado da imagem na tag p.
 * @param {Objecy.<string>} atributes - Caminho para qualaquer tipo de tributo (src, alt etc.), passar em um {Object}.
 * @param {Array.<string>} [Class_list] - Classes css que irão padronizar a div, passar em um [Array]
 * @returns {HTMLElement}
 */

export function logo(text, atributes, ...class_list) {
  if (!text) {
    throw new Error("O logo precisa ter pelo menos um texto no elemento.");
  }
  const img = myCreateElement({
    tag: "img",
    attributes: atributes,
  });
  const p = myCreateElement({
    tag: "p",
    textContent: text,
  });
  return wrapper({
    classes: class_list,
    children: [img, p],
  });
}
