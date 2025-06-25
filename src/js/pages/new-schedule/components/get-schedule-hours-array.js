import { getAPI } from "../../../api/routes/get-api";

let scheduleHoursArray = []; // Armazena os horários sempre atualizados

export async function getScheduleHoursArray() {
  const inputDate = document.querySelector("#data");
  if (!inputDate) return [];

  // Função para buscar e atualizar os horários no array
  async function updateHours(date) {
    const data = await getAPI(date);
    scheduleHoursArray = data.map((item) => item.time);
  }

  // Carrega os horários da data inicial (input.value)
  if (inputDate.value) {
    await updateHours(inputDate.value);
  }

  // Atualiza os horários sempre que a data mudar
  inputDate.addEventListener("change", async (e) => {
    await updateHours(e.target.value);
  });

  return scheduleHoursArray; // Retorna os horários da data inicial
}
