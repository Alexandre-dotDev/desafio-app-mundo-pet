import { createHeaderSchedule } from "./create-header-schedule";

export async function headerSchedules(period) {
  // Criação direta com base no período passado

  switch (period) {
    case "morning":
      return createHeaderSchedule(
        "09h-12h",
        "Sun-Fog.svg",
        "Logo do sol",
        "Manhã"
      );
      break;
    case "afternoon":
      return createHeaderSchedule(
        "13h-18h",
        "Cloud-Sun.svg",
        "Logo do sol com nuvens",
        "Tarde"
      );
      break;
    case "night":
      return createHeaderSchedule(
        "19h-21h",
        "Moon-Stars.svg",
        "Logo da lua com estrelas",
        "Noite"
      );
      break;
    default:
      return null;
      break;
  }

  // if (period === "Manhã") {
  // }

  // if (period === "Tarde") {
  //   return createHeaderSchedule(
  //     "13h-18h",
  //     "Cloud-Sun.svg",
  //     "Logo do sol com nuvens",
  //     "Tarde"
  //   );
  // }

  // if (period === "Noite") {
  //   return createHeaderSchedule(
  //     "19h-21h",
  //     "Moon-Stars.svg",
  //     "Logo da lua com estrelas",
  //     "Noite"
  //   );
  // }

  // return null;
}
