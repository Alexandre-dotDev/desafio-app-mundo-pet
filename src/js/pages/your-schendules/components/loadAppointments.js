import { filterByDate } from "../../../utils/filter-by-date";
import { updateAppointments } from "./update-schedule-section";

export async function loadAppointments() {
  const appointments = document.querySelector(".appointments");
  if (!appointments) return null;

  await filterByDate();
  await updateAppointments();
}
