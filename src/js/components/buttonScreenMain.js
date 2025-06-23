import { myCreateElement } from "./standard/myCreateElement";
import { wrapper } from "./standard/wrapper";
/** Componente "logo" com imagem + texto, já formatado com classes e estrutura pronta.
 * @param {string} text_logo - Texto que será exibido no tag button.
 * @param {Array.<string>} [Class_list] - Classes css que irão padronizar a div.
 * @returns {HTMLElement}
 */
export function buttonScreenMain(id, text_logo, ...class_list) {
  if (!text_logo) {
    throw new Error("O burron precisa ter pelo menos um texto no elemento.");
  }
  const button = myCreateElement({
    tag: "button",
    textContent: text_logo,
  });

  return wrapper({
    classes: class_list,
    children: [button],
    attributes: { id: id },
  });
}
