import { buttonSchedules } from "../components/buttonSchedules";
import { logo } from "../components/logo";
import { pageYourSchedule } from "./your-schendules/page-your-schedules";
import { dateCurrent } from "./your-schendules/components/date-current";
import { newSchedule } from "./your-schendules/components/new-schedule";
import { pageNewSchedule } from "./new-schedule/page-new-schedule";

export async function pageMain() {
  const body = document.querySelector("body");

  const main = document.createElement("main");
  main.classList.add("container", "flex", "column", "center-col-inline");

  main.append(
    logo(),
    await pageYourSchedule(),
    pageNewSchedule(),
    buttonSchedules()
  );
  body.append(main);

  dateCurrent();
  newSchedule();
}
