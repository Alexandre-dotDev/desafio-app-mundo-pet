import { buttonSchedules } from "../components/buttonSchedules";
import { logo } from "../components/logo";
import { pageYourSchedule } from "./your-schendules/page-your-schedules";

export async function pageMain() {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  main.classList.add("container", "flex", "column", "center-col-inline");

  main.append(logo(), await pageYourSchedule(), buttonSchedules());
  body.append(main);
}
