/**
 * @typedef {Object} myCreateElementOptions
 * @property {string} [tag="div"] - A tag HTML a ser criada (ex: "div", "button", "img").
 * @property {string[]} [classes=[]] - Lista de classes CSS a serem adicionadas.
 * @property {string} [textContent=""] - Texto interno do elemento.
 * @property {Object.<string, string>} [attributes={}] - Atributos HTML como id, src, alt, etc.
 * @property {HTMLElement[]} [children=[]] - Elementos filhos a serem adicionados.
 * @property {Object.<string, (event: Event) => void>} [events={}] - Eventos e seus respectivos manipuladores. 
/*
 * Cria um elemento HTML com configurações dinâmicas.
 *
 * @param {myCreateElementOptions} options - Opções para criação do elemento.
 * @returns {HTMLElement} Elemento HTML criado.
 *
 * @example
 * const button = myCreateElement({
 *   tag: "button",
 *   textContent: "Clique aqui",
 *   classes: ["btn"],
 *   attributes: { id: "meuBotao" },
 *   events: { click: () => console.log("Clicado!") }
 * });
 */
export function myCreateElement({
  tag = "div",
  classes = [],
  textContent = "",
  attributes = {},
  children = [],
  events = {},
}) {
  const el = document.createElement(tag);

  if (Array.isArray(classes)) {
    el.classList.add(...classes);
  }

  if (textContent) {
    el.textContent = textContent;
  }

  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }

  for (const [event, handler] of Object.entries(events)) {
    el.addEventListener(event, handler);
  }

  children.forEach((child) => {
    el.appendChild(child);
  });

  return el;
}
