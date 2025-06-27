export function showToast(message, type = "info") {
  let container = document.querySelector("#toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";

    // 👇 Posiciona o container no topo da parte visível da rolagem
    container.style.position = "absolute";
    container.style.top = `${window.scrollY + 16}px`; // 16px = margem superior
    container.style.right = "1rem";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.5rem";
    container.style.pointerEvents = "none";

    document.body.appendChild(container);

    // ======= NOVO: Atualiza posição do toast conforme o scroll =======
    // Função que atualiza o top do container dinamicamente
    const updateToastPosition = () => {
      container.style.top = `${window.scrollY + 16}px`;
    };

    // Adiciona listener para scroll da janela que chama updateToastPosition
    window.addEventListener("scroll", updateToastPosition);

    // Para evitar vazamento de memória, removemos o listener quando o container for removido do DOM
    const observer = new MutationObserver(() => {
      if (!document.body.contains(container)) {
        window.removeEventListener("scroll", updateToastPosition); // remove o listener
        observer.disconnect(); // para o observer
      }
    });

    // Observa alterações nos filhos do body para saber quando container for removido
    observer.observe(document.body, { childList: true });
  }

  const icons = {
    success: "✅",
    info: "🔔",
    error: "⚠️",
  };

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = `${icons[type] || ""} ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    // Remove container se estiver vazio
    if (container.children.length === 0) {
      container.remove();
    }
  }, 6500);
}
