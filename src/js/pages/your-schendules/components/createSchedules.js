import { getAPI } from "../../../api/routes/get-api";
import { getMillisecondsFromMidnight } from "../../../utils/get-milliseconds-from-midnight";
import { headerSchedules } from "./header-schedules";
import { scheduleHours } from "./schedule-hours";

//Cria uma div que receberá suas tags internas separadas por peréodos(manhã, tarde e noite)
export async function createSchedules() {
  const data = await getAPI();

  // Caso não haja agendamentos
  if (!data.length) {
    const div = document.createElement("div");
    div.classList.add("schedules-void");
    div.textContent = "Não há reservas para esse dia.";
    return div;
  }

  // Períodos em milissegundos, objeto com outros objetos.
  const periods = {
    morning: { label: "Manhã", start: 32400000, end: 46799000 },
    afternoon: { label: "Tarde", start: 46800000, end: 64799000 },
    night: { label: "Noite", start: 64800000, end: 75600000 },
  };

  // Agrupar agendamentos por período, cria objeto com key e array de periodos.
  const periodGroups = {
    morning: [],
    afternoon: [],
    night: [],
  };

  //Percorre os dados e verifica a qual perído pertence e faz um push() no período da condicional.
  for (const item of data) {
    const milliseconds = await getMillisecondsFromMidnight(item.time);

    if (
      milliseconds >= periods.morning.start &&
      milliseconds <= periods.morning.end
    ) {
      periodGroups.morning.push(item);
    } else if (
      milliseconds >= periods.afternoon.start &&
      milliseconds <= periods.afternoon.end
    ) {
      periodGroups.afternoon.push(item);
    } else if (
      milliseconds >= periods.night.start &&
      milliseconds <= periods.night.end
    ) {
      periodGroups.night.push(item);
    }
  }

  // Container principal dos agendamentos
  const appointments = document.createElement("div");
  appointments.classList.add("appointments", "flex", "column");

  // Criar blocos de horários por período
  for (const [key, group] of Object.entries(periodGroups)) {
    if (group.length === 0) continue;

    const div = document.createElement("div");
    div.classList.add("schedules");

    //Passa por parametro os valores de inico, fim do período e o nome da label.
    const header = await headerSchedules(
      periods[key].start,
      periods[key].end,
      periods[key].label
    );

    div.append(header, await scheduleHours(group));
    appointments.append(div);
  }

  return appointments;
}
