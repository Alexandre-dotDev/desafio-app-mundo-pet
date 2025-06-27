import { wrapper } from "../../../components/standard/wrapper";
import { myCreateElement } from "../../../components/standard/myCreateElement";
import { createCylinder3D } from "../../../utils/create-cylinder-3d";
import { getScheduleHoursArray } from "./get-schedule-hours-array";
import { watchDateValidation } from "../../../utils/watch-date-validation";

export async function showAvailableTimesPopup(inputTarget) {
  const times = await getScheduleHoursArray();

  if (!times.length) {
    return;
  }

  // Remove popup antigo
  const oldPopup = document.querySelector(".popup-times");
  if (oldPopup) oldPopup.remove();

  // Cria o popup (.scene com .cylinder dentro)
  const popup = wrapper({
    classes: ["popup-overlay"],
    attributes: { id: "cylinder-id" },
    children: [
      myCreateElement({
        tag: "div",
        classes: ["scene"],
        children: [
          myCreateElement({
            tag: "div",
            classes: ["cylinder"],
            attributes: { id: "cylinder" },
          }),
        ],
      }),
    ],
  });

  // Adiciona ao DOM e trava scroll do body
  document.body.appendChild(popup);
  document.body.classList.add("no-scroll");

  watchDateValidation("#filter-date", (isValid) => {
    if (!isValid) {
      popup.remove();
      return;
    } else {
      // Cria o cilindro 3D
      createCylinder3D({
        containerElement: popup,
        data: times,

        onSelect: (value) => {
          inputTarget.value = value;
          popup.remove();
          document.body.classList.remove("no-scroll");
        },
      });
    }
  });

  // Fecha ao clicar fora
  function closePopup(e) {
    if (popup.contains(e.target)) {
      popup.remove();
      document.removeEventListener("click", closePopup);
      document.body.classList.remove("no-scroll");
    }
  }

  setTimeout(() => {
    document.addEventListener("click", closePopup);
  }, 10);
}
