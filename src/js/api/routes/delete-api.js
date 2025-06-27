import { showConfirmToast } from "../../components/show-confirm-toast";
import { showToast } from "../../components/show-toast";
import { updateAppointments } from "../../pages/your-schendules/components/update-appointments";
import { baseAPI } from "../baseAPI";

export async function deleteAPI() {
  document.addEventListener("click", async (event) => {
    const removeBtn = event.target.closest(".remove-schedule");
    if (!removeBtn) return;

    event.preventDefault();

    const id = removeBtn.dataset.id;
    if (!id) {
      console.warn("ID não encontrado no botão.");
      return;
    }

    showConfirmToast("Deseja realmente excluir este agendamento?").then(
      async (confirmed) => {
        if (confirmed) {
          try {
            const response = await fetch(`${baseAPI}/${id}`, {
              method: "DELETE",
            });

            if (!response.ok) {
              throw new Error(`Erro ao deletar: status ${response.status}`);
            }

            showToast(`Agendamento removido com sucesso`, "success");

            // ✅ Pega a data atual do input para manter o filtro
            const inputDate = document.querySelector(".input-wrapper #data");
            const currentDate = inputDate?.value || "";

            // ✅ Atualiza os agendamentos filtrando pela mesma data
            await updateAppointments(currentDate);
          } catch (error) {
            console.error("❌ Erro ao excluir agendamento:", error);
          }
        }
      }
    );
  });
}
