import { pageYourSchedule } from "../../your-schendules/page-your-schedules";

export async function updateScheduleSection() {
  const oldSection = document.getElementById("schedule-identifier");
  if (oldSection) {
    const newSection = await pageYourSchedule();
    oldSection.replaceWith(newSection);
  }
}
