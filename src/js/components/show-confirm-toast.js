export function showConfirmToast(message) {
  return new Promise((resolve) => {
    let container = document.querySelector("#toast-container");

    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);

      const updateToastPosition = () => {
        container.style.top = `${window.scrollY + 16}px`;
      };
      updateToastPosition();

      window.addEventListener("scroll", updateToastPosition);

      const observer = new MutationObserver(() => {
        if (!document.body.contains(container)) {
          window.removeEventListener("scroll", updateToastPosition);
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true });
    }

    // Cria o toast de confirmação
    const toast = document.createElement("div");
    toast.className = "toast-confirm";

    // Mensagem
    const text = document.createElement("div");
    text.className = "message-text";
    text.textContent = message;

    // Container dos botões
    const buttons = document.createElement("div");
    buttons.className = "buttons";

    // Botão OK
    const okBtn = document.createElement("button");
    okBtn.className = "ok-btn";
    okBtn.textContent = "OK";

    // Botão Cancelar
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cancel-btn";
    cancelBtn.textContent = "Cancelar";

    buttons.appendChild(okBtn);
    buttons.appendChild(cancelBtn);

    toast.appendChild(text);
    toast.appendChild(buttons);
    container.appendChild(toast);

    function cleanUp() {
      toast.classList.add("fade-out");
      setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
          container.remove();
        }
      }, 300); // tempo igual ao transition
    }

    okBtn.addEventListener("click", () => {
      cleanUp();
      resolve(true);
    });

    cancelBtn.addEventListener("click", () => {
      cleanUp();
      resolve(false);
    });
  });
}
