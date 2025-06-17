import { createHeaderSchedule } from "./create-header-schedule";

export async function headerSchedules(hour_1, hour_2, period) {
  // Criação direta com base no período passado
  if (period === "Manhã") {
    return createHeaderSchedule(
      "09h-12h",
      "Sun-Fog.svg",
      "Logo do sol",
      "Manhã"
    );
  }

  if (period === "Tarde") {
    return createHeaderSchedule(
      "13h-18h",
      "Cloud-Sun.svg",
      "Logo do sol com nuvens",
      "Tarde"
    );
  }

  if (period === "Noite") {
    return createHeaderSchedule(
      "19h-21h",
      "Moon-Stars.svg",
      "Logo da lua com estrelas",
      "Noite"
    );
  }

  return null;
}
