import { postAPI } from "../../../api/routes/post-api";
import { collectFormData } from "./collect-form-data";
import { clearInputs } from "./clear-inputs";
import { updateAppointments } from "../../your-schendules/components/update-appointments";
import { showToast } from "../../../components/show-toast";

export async function loadNewSchedule() {
  const buttonToSchedule = document.querySelector("button");

  if (!buttonToSchedule) return;

  buttonToSchedule.addEventListener("click", async (event) => {
    event.preventDefault();

    const list = collectFormData();
    if (!list) return;

    const result = await postAPI(list);

    if (!result.success) {
      showToast(`Erro ao cadastrar: ${result.error}`, "error");
      return;
    }

    clearInputs();
    const currentDate = document.querySelector(".input-wrapper #data").value; // ← pega data atual do input

    await updateAppointments(currentDate); // ← passa a data para garantir atualização correta
  });
}
