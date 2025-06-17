export function phone() {
  const div = document.createElement("div");
  div.classList.add("phone");

  const label = document.createElement("label");
  label.setAttribute("for", "phone");
  label.textContent = "Telefone";

  const input = document.createElement("input");
  input.setAttribute("type", "tel");
  input.setAttribute("name", "phone");
  input.setAttribute("id", "phone");
  input.setAttribute("placeholder", "(00) 0 0000-0000");
  input.setAttribute("required", "");

  div.append(label, input);

  return div;
}
