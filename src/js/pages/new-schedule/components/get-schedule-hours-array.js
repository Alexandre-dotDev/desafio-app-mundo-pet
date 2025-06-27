import { getAPI } from "../../../api/routes/get-api";
import dayjs from "dayjs";
import { generateSchedules } from "../../../utils/generate-scheduless";
import { showToast } from "../../../components/show-toast";

export async function getScheduleHoursArray() {
  const inputDate = document.querySelector("#filter-date");
  if (!inputDate) return [];

  if (!inputDate.value) {
    inputDate.value = dayjs().format("YYYY-MM-DD");
  }

  const dateString = inputDate.value;
  const isToday = dayjs(dateString).isSame(dayjs(), "day");
  const now = dayjs().format("HH:mm");

  const availableSchedules = generateSchedules();
  const data = await getAPI(dateString);
  const scheduled = data.map((item) => item.time);

  if (!data.length) {
    showToast("Agenda disponével para esta data.", "info");
  }

  let availableTimes = availableSchedules.filter((h) => !scheduled.includes(h));

  if (isToday) {
    availableTimes = availableTimes.filter((h) => h >= now);
  }

  if (availableTimes.length === 0) {
    showToast("Todos os horários estão ocupados nesta data.", "info");
  }

  return availableTimes;
}
