export function tutor() {
  const div = document.createElement("div");
  div.classList.add("tutor");

  const label = document.createElement("label");
  label.setAttribute("for", "name-tutor");
  label.textContent = "Nome do tutor";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "name-tutor");
  input.setAttribute("id", "name-tutor");
  input.setAttribute("placeholder", "Seu nome");
  input.setAttribute("required", "");

  div.append(label, input);

  return div;
}
