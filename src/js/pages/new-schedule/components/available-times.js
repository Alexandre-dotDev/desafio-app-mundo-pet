import { getAPI } from "../../../api/routes/get-api";
import { generateSchedules } from "../../../utils/generate-scheduless";
import { getScheduleHoursArray } from "./get-schedule-hours-array";

export async function availableTimes() {
  const schedulesDB = await getScheduleHoursArray();
  const arrayGenerator = generateSchedules();

  // Filtra os horários que não estão no banco (estão disponíveis)
  const available = arrayGenerator.filter(
    (time) => !schedulesDB.includes(time)
  );

  return available;
}
