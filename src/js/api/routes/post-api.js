import { baseAPI } from "../baseAPI";

/**
 * Envia um novo agendamento para a API.
 * @param {Object} payload - Objeto contendo os dados do agendamento.
 * @returns {{ success: boolean, data?: Object, error?: string }}
 */
export async function postAPI(payload) {
  // Validação básica
  if (!payload || typeof payload !== "object") {
    console.warn("Payload inválido. Esperado um objeto.");
    return { success: false, error: "Dados inválidos enviados." };
  }

  try {
    const response = await fetch(baseAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMessage = "Erro na requisição.";

      if (response.status === 400) errorMessage = "Dados inválidos.";
      if (response.status === 404) errorMessage = "URL não encontrada.";
      if (response.status === 500) errorMessage = "Erro interno no servidor.";

      throw new Error(`${errorMessage} (status ${response.status})`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Erro ao enviar os dados:", error.message);
    return { success: false, error: error.message };
  }
}
