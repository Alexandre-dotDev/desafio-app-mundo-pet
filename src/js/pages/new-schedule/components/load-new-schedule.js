import { postAPI } from "../../../api/routes/post-api";
import { collectFormData } from "./collect-form-data";
import { clearInputs } from "./clear-inputs";
import { updateScheduleSection } from "../../your-schendules/components/update-schedule-section";

export async function loadNewSchedule() {
  const buttonToSchedule = document.querySelector("button");

  if (!buttonToSchedule) return;

  buttonToSchedule.addEventListener("click", async (event) => {
    event.preventDefault();

    const list = collectFormData();
    if (!list) return;

    const result = await postAPI(list);

    if (!result.success) {
      alert("Erro ao cadastrar: " + result.error);
      return;
    }
    clearInputs();
    await updateScheduleSection();
  });
}
