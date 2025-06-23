import { myCreateElement } from "./myCreateElement";

/**
 * Cria um wrapper HTML padrão com suporte a classes, atributos, eventos e filhos.
 *
 * @param {Object} options - Configurações.
 * @param {string} [options.text] - Texto.
 * @param {HTMLElement[]} [options.children=[]] - Elementos filhos (ex: ícones, spans).
 * @param {Object.<string, string>} [options.attributes={}] - Atributos HTML como id, type, etc.
 * @param {Object.<string, Function>} [options.events={}] - Eventos (click, focus, etc.).
 * @param {string[]} [options.classes=[]] - Lista de classes CSS.
 *
 * @returns {HTMLElement} Elemento <div> criado.
 *
 * @throws {Error} Se não for fornecido um `children`a ele.
 */
export function wrapper({
  text = "",
  children = [],
  attributes = {},
  events = {},
  classes = [],
} = {}) {
  // Validação: precisa ter texto ou algum filho
  if (children.length === 0) {
    throw new Error("O wrapper precisa ter pelo menos um elemento filho.");
  }

  return myCreateElement({
    tag: "div",
    textContent: text,
    children,
    attributes,
    events,
    classes,
  });
}
