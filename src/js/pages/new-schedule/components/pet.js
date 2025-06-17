export function pet() {
  const div = document.createElement("div");
  div.classList.add("pet");

  const label = document.createElement("label");
  label.setAttribute("for", "pet-name");
  label.textContent = "Nome do pet";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "pet-name");
  input.setAttribute("id", "pet-name");
  input.setAttribute("placeholder", "Nome do pet");
  input.setAttribute("required", "");

  div.append(label, input);

  return div;
}
