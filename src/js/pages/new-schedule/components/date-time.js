import { date } from "./date";
import { hour } from "./hour";

export function dateTime() {
  const div = document.createElement("div");
  div.classList.add("date-time", "flex", "column");

  div.append(date(), hour());

  return div;
}
