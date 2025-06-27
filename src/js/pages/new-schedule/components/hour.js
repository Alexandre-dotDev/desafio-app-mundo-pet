import { showToast } from "../../../components/show-toast";
import { watchDateValidation } from "../../../utils/watch-date-validation";
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
  inputTime.setAttribute("readonly", "");
  inputTime.setAttribute("placeholder", "Horário");
  inputTime.setAttribute("required", "");

  watchDateValidation("#filter-date", (isValid) => {
    if (!isValid) {
      inputTime.classList.add("block-click");
      setTimeout(() => {
        showToast("Não é permitido agendar em datas retroativas.", "error");
      }, 2000);
    } else {
      inputTime.classList.remove("block-click");
    }
    clearTimeout;
  });

  inputTime.addEventListener("click", async (e) => {
    if (inputTime.classList.contains("block-click")) {
      e.preventDefault(); // Impede ação
      e.stopPropagation(); // Impede propagação
      return;
    }

    await showAvailableTimesPopup(inputTime);
  });

  div.append(label, inputTime);
  return div;
}
