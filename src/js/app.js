import { logo } from "./components/logo";
import { pageNewSchedule } from "./pages/new-schedule/page-new-schedule";
import { pageYourSchedules } from "./pages/your-schendules/page-your-schedules";
import { dateCurrent } from "./pages/your-schendules/components/date-current";
import { openNewSchedule } from "./pages/your-schendules/components/open-new-schedule";
import { closeWindowSchedule } from "./pages/new-schedule/components/close-window-schedule";
import { loadNewSchedule } from "./pages/new-schedule/components/load-new-schedule";
import { buttonScreenMain } from "./components/buttonScreenMain";
import { deleteAPI } from "./api/routes/delete-api";

export async function app() {
  const body = document.querySelector("body");

  const main = document.createElement("main");
  main.classList.add("container", "flex", "column", "center-col-inline");

  main.append(
    logo(
      "Mundo Pet",
      {
        src: "./assets/icons/Dog-Duotone-Logo.svg",
        alt: "Logo de cachorro",
      },
      "logo",
      "flex",
      "center"
    ),
    await pageYourSchedules({
      id: "schedule-id",
      class_list: ["your-schedule", "flex", "column"],
    }),
    pageNewSchedule(),
    buttonScreenMain("button-id", "Agendamento", "button", "flex", "center")
  );
  body.append(main);

  await dateCurrent();
  await openNewSchedule();
  await closeWindowSchedule();
  await loadNewSchedule();
  await deleteAPI();
}

// TODO: Usar o método MutationObserver nessa parte do codigo, busca informações no chatGPT
