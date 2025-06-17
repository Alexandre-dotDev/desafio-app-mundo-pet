export function date() {
  const div = document.createElement("div");
  div.classList.add("date");

  const label = document.createElement("label");
  label.setAttribute("for", "date");
  label.textContent = "Data";

  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "date");
  input.setAttribute("id", "date");
  input.setAttribute("required", "");

  div.append(label, input);

  return div;
}
