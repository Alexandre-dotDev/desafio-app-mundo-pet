import { filterByDate } from "../../../utils/filter-by-date";
import { updateAppointments } from "./update-appointments";

export async function loadAppointments() {
  const appointments = document.querySelector("#appointments-id");
  if (!appointments) return null;

  await filterByDate();

  await updateAppointments();
}
