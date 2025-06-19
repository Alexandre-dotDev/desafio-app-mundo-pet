import { getAPI } from "../api/routes/get-api";
import { updateAppointments } from "../pages/your-schendules/components/update-schedule-section";

export async function filterByDate() {
  const inputDate = document.querySelector(".input-wrapper #data");
  // console.log(inputDate);

  if (!inputDate) return;

  inputDate.addEventListener("input", async (event) => {
    const value = event.target.value;

    await updateAppointments(value);
  });

  const date = await getAPI(inputDate.value);
  // console.log(date);
  await updateAppointments(date);

  return date;
}
