export function hour() {
  const div = document.createElement("div");
  div.classList.add("hour");

  const label = document.createElement("label");
  label.setAttribute("for", "hour");
  label.textContent = "Hora";

  const input = document.createElement("input");
  input.setAttribute("type", "time");
  input.setAttribute("name", "hour");
  input.setAttribute("id", "hour");
  input.setAttribute("required", "");

  div.append(label, input);

  return div;
}
