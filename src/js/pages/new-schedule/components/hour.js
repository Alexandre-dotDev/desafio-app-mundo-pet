import { generateSchedules } from "../../../utils/generate-scheduless";
import { showAvailableTimesPopup } from "./show-available-times-popup";

export function hour() {
  const div = document.createElement("div");
  div.classList.add("hour");

  const label = document.createElement("label");
  label.setAttribute("for", "hour");
  label.textContent = "Hora";

  const inputTime = document.createElement("input");
  inputTime.setAttribute("type", "text");
  inputTime.setAttribute("name", "hour");
  inputTime.setAttribute("id", "hour");
  inputTime.setAttribute("placeholder", "Selecione um horário");
  inputTime.setAttribute("required", "");

  inputTime.addEventListener("click", async (e) => {
    await showAvailableTimesPopup();
  });

  div.append(label, inputTime);

  return div;
}
