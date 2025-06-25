export function showToast(message, type = "info") {
  let container = document.querySelector("#toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Remove após a animação
  setTimeout(() => {
    toast.remove();
  }, 6500);
}
