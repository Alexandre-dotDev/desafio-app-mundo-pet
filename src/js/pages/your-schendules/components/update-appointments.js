import { createSchedules } from "./createSchedules";

export async function updateAppointments(dateFilter = "") {
  const fragment = await createSchedules(dateFilter);
  const newAppointments = fragment.querySelector("#appointments-id");

  if (!newAppointments) {
    console.warn("createSchedules retornou sem #appointments-id.");
    return;
  }

  const oldAppointments = document.getElementById("appointments-id");

  if (oldAppointments) {
    oldAppointments.replaceWith(newAppointments);
  } else {
    const container = document.getElementById("schedule-id");
    if (container) {
      container.appendChild(newAppointments);
    } else {
      console.warn("Container #schedule-id não encontrado.");
    }
  }
}
