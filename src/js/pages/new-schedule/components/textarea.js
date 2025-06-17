export function textarea() {
  const div = document.createElement("div");
  div.classList.add("textarea");

  const label = document.createElement("label");
  label.setAttribute("for", "description");
  label.textContent = "Descrição de serviço";

  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("placeholder", "Banho e tosa");
  textarea.setAttribute("required", "");

  div.append(label, textarea);

  return div;
}
