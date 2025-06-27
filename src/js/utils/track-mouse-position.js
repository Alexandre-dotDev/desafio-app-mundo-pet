// Função que adiciona listener 'mousemove' para simular hover em um botão específico
export function trackMouseInElement(button) {
  // Verifica se o parâmetro é um elemento HTML válido
  if (!(button instanceof HTMLElement)) {
    console.warn("Elemento inválido fornecido para trackMouseInElement");
    return;
  }

  // Variável para controlar se o botão já está com a classe hover aplicada
  let isHovered = false;

  // Adiciona listener de movimento do mouse sobre o botão
  button.addEventListener("mousemove", () => {
    // Se ainda não estiver com hover simulado, adiciona a classe
    if (!isHovered) {
      button.classList.add("hover-simulado");
      isHovered = true;
    }
  });

  // Remove o hover simulado quando o mouse sai do botão
  button.addEventListener("mouseleave", () => {
    if (isHovered) {
      button.classList.remove("hover-simulado");
      isHovered = false;
    }
  });
}
/*
export function trackMouseInElement(button) {
  if (!(button instanceof HTMLElement)) {
    console.warn("Elemento inválido fornecido para trackMouseInElement");
    return;
  }

  // Quando o mouse entrar no botão (evento mais preciso que mousemove para hover)
  button.addEventListener("mouseenter", () => {
    button.classList.add("hover-simulado");
    console.log(button);
  });

  // Quando o mouse sair do botão, remove o hover
  button.addEventListener("mouseleave", () => {
    button.classList.remove("hover-simulado");
  });
}
*/
