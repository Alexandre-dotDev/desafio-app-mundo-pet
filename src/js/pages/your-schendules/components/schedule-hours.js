import { renderSchedules } from "./render-schedules";

//Cria uma div que receberá seus elementos internos do método renderSchedules().
export async function scheduleHours(group) {
  const div = document.createElement("div");
  div.classList.add("schedule-hours");

  await renderSchedules(div, group);

  return div;
}
