import { updateAppointments } from "./update-appointments";

export async function filterByDate() {
  const inputDate = document.querySelector(".input-wrapper #data");

  if (!inputDate) return;

  // Atualiza ao mudar o valor do input
  inputDate.addEventListener("input", async (event) => {
    const value = event.target.value;
    await updateAppointments(value);
  });

  // Atualiza ao carregar com a data atual do input
  await updateAppointments(inputDate.value);
}
