import { baseAPI } from "../baseAPI";

export async function getAPI(standard) {
  const normalize = standard ? `${baseAPI}?date=${standard}` : baseAPI;

  try {
    const response = await fetch(normalize);

    if (!response.ok) {
      let errorMessage = "Erro na requisição.";

      if (response.status === 400) errorMessage = "Dados inválidos.";
      if (response.status === 404) errorMessage = "URL não encontrada.";
      if (response.status === 500) errorMessage = "Erro interno no servidor.";

      throw new Error(`${errorMessage} (status ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da agenda:", error);
    return []; // retorna lista vazia para evitar quebra no código que usar
  }
}
