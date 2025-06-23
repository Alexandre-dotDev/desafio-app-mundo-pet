import dayjs from "dayjs";

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
  input.value = dayjs().format("YYYY-MM-DD");

  div.append(label, input);

  return div;
}
