export function buttonSchedules() {
  const div = document.createElement("div");
  div.classList.add("button", "flex", "center");
  const btn = document.createElement("button");
  btn.textContent = "Agendamento";

  div.append(btn);

  return div;
}
