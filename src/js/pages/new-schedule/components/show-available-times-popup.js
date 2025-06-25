import dayjs from "dayjs";
import { availableTimes } from "./available-times";

const currentHour = dayjs().format("HH:mm");
const currentDate = dayjs().format("YYYY-MM-DD");

export async function showAvailableTimesPopup() {
  const times = await availableTimes();

  if (!times.length) {
    alert("Nenhum horário disponível.");
    return;
  }

  // Remove popup antigo, se houver
  const oldPopup = document.querySelector(".popup-times");
  if (oldPopup) oldPopup.remove();

  // Cria o popup
  const popup = document.createElement("div");
  popup.classList.add("popup-times");

  // Adiciona os horários como botões
  times.forEach((time) => {
    const button = document.createElement("button");
    button.classList.add("popup-btn");
    button.textContent = time;

    button.addEventListener("click", () => {
      const inputTime = document.querySelector("#hour");
      const inputDate = document.querySelector("#filter-date").value;

      if (time < currentHour && currentDate === inputDate) {
        const limit = currentHour > "21:01" ? "21hs" : currentHour;
        alert(
          `A hora não pode ser menor que ${limit}.\nHorário de agendamentos das 9hs às 21hs`
        );
        inputTime.value = "";
        popup.remove();

        return;
      }

      if (inputTime) inputTime.value = time;
      popup.remove();
      document.removeEventListener("click", closePopup);
    });

    popup.appendChild(button);
  });

  // Adiciona ao body
  document.body.appendChild(popup);

  // Fechar ao clicar fora
  function closePopup(e) {
    if (!popup.contains(e.target)) {
      popup.remove();
      document.removeEventListener("click", closePopup);
    }
  }

  setTimeout(() => {
    document.addEventListener("click", closePopup);
  }, 10); // Pequeno delay evita remover imediatamente
}
