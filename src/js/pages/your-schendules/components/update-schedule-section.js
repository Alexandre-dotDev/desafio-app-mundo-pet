import { pageYourSchedule } from "../../your-schendules/page-your-schedules";
import { createSchedules } from "./createSchedules";

export async function updateScheduleSection() {
  const oldSection = document.getElementById("schedule-identifier");
  if (oldSection) {
    const newSection = await pageYourSchedule();
    oldSection.replaceWith(newSection);
  }
}

export async function updateAppointments(dateFilter = "") {
  const fragment = await createSchedules(dateFilter);

  const newAppointments = fragment.querySelector("#appointments-id");

  const oldAppointments = document.getElementById("appointments-id");

  if (oldAppointments && newAppointments) {
    oldAppointments.replaceWith(newAppointments);
  } else {
    const container = document.getElementById("schedule-identifier");
    if (container && newAppointments) {
      container.appendChild(newAppointments);
    } else {
      console.warn("Não foi possível adicionar appointments. Verifique o DOM.");
    }
  }
}
