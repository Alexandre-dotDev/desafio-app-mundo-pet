import { createSchedules } from "./components/createSchedules";
import { headerHero } from "./components/header-hero";

export async function pageYourSchedule() {
  const section = document.createElement("section");
  section.classList.add("your-schedule", "flex", "column");
  section.id = "schedule-identifier";

  section.append(headerHero(), await createSchedules());

  return section;
}
