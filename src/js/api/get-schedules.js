import { baseAPI } from "./baseAPI";

export async function getSchedules() {
  try {
    const response = await fetch(baseAPI);
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da agenda:", error);
    return []; // retorna lista vazia para evitar quebra no código que usar
  }
}
