import { createSchedules } from "./components/createSchedules";
import { headerHero } from "./components/header-hero";

export async function pageYourSchedule() {
  const div = document.createElement("div");
  div.classList.add("your-schedule", "flex", "column");

  div.append(headerHero(), await createSchedules());

  return div;
}
