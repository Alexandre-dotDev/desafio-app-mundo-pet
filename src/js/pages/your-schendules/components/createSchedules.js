import { getAPI } from "../../../api/routes/get-api";
import { getMillisecondsFromMidnight } from "../../../utils/get-milliseconds-from-midnight";
import { headerSchedules } from "./header-schedules";
import { scheduleHours } from "./schedule-hours";
// Função principal que organiza os agendamentos por período do dia
export async function createSchedules(date) {
  const data = await getAPI(date);
  const fragment = document.createDocumentFragment();

  if (!data.length) {
    const appointments = await createAppointments(); // ← correção: garante existência do elemento com ID
    const empty = document.createElement("div");
    empty.classList.add("schedules-void");
    empty.textContent = "Não há agendamentos para esse dia.";
    appointments.appendChild(empty);
    fragment.appendChild(appointments);
    return fragment;
  }

  // 4. Define os períodos do dia em milissegundos desde meia-noite
  const periods = {
    morning: { label: "Manhã", start: 32400000, end: 46799000 }, // 09:00 – 12:59
    afternoon: { label: "Tarde", start: 46800000, end: 64799000 }, // 13:00 – 17:59
    night: { label: "Noite", start: 64800000, end: Infinity }, // 18:00 – Infinity
  };

  // 5. Estrutura para agrupar os agendamentos por período.
  // 6. Classifica cada item da API no período correspondente com base no horário.
  const filter = await filterPeriods({ obj: periods, data: data });

  // 7. Cria o elemento <div> pai que vai agrupar todos os horários (schedules)
  const appointments = await createAppointments();

  // 8. Cria cada grupo com agendamentos, monta os blocos visuais.
  await createBlockSchedules({
    filter: filter,
    element: appointments,
  });

  // 9. Adiciona o bloco final de appointments ao fragmento
  fragment.append(appointments);
  // 10. Retorna o fragmento completo com toda a estrutura pronta para renderização
  return fragment;
}

// Functions
//Cria o elemento que receberá os elementos.
async function schedule({ header, hours }) {
  const schedule = document.createElement("div");
  schedule.classList.add("schedules");

  schedule.append(header, hours);

  return schedule;
}
//Cria o elemento.
async function createAppointments() {
  const appointments = document.createElement("div");
  appointments.classList.add("appointments", "flex", "column");
  appointments.id = "appointments-id";

  return appointments;
}

async function filterPeriods({ obj, data }) {
  // 5. Estrutura para agrupar os agendamentos por período
  const periodGroups = {
    morning: [],
    afternoon: [],
    night: [],
  };
  // 6. Classifica cada item da API no período correspondente com base no horário

  for (const item of data) {
    const milliseconds = await getMillisecondsFromMidnight(item.time);

    if (milliseconds >= obj.morning.start && milliseconds <= obj.morning.end) {
      periodGroups.morning.push(item);
    } else if (
      milliseconds >= obj.afternoon.start &&
      milliseconds <= obj.afternoon.end
    ) {
      periodGroups.afternoon.push(item);
    } else if (
      milliseconds >= obj.night.start &&
      milliseconds <= obj.night.end
    ) {
      periodGroups.night.push(item);
    }
  }

  return periodGroups;
}

async function createBlockSchedules({ filter, element }) {
  // 8. Para cada grupo com agendamentos, monta os blocos visuais
  const groups = Object.entries(filter);
  const group_1 = groups.map(([period, data]) => ({
    period,
    data,
  }));

  for (const item of group_1) {
    if (item.data.length === 0) continue;
    const hours = await scheduleHours(item.data);
    const header = await headerSchedules(item.period);
    const schedules = await schedule({ header, hours });

    element.append(schedules);
  }
}
