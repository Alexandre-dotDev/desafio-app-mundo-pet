import { form } from "./components/form";

export function pageNewSchedule() {
  const section = document.createElement("section");
  section.classList.add("new-schedule", "disabled");

  section.append(form());

  return section;
}
