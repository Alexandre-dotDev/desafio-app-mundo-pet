import { getAPI } from "../../../api/routes/get-api";
import { getMillisecondsFromMidnight } from "../../../utils/get-milliseconds-from-midnight";
import { headerSchedules } from "./header-schedules";
import { scheduleHours } from "./schedule-hours";

// Função principal que organiza os agendamentos por período do dia
export async function createSchedules(dateFilter = "") {
  // Passa o filtro de data diretamente para a API
  const data = await getAPI(dateFilter);
  const fragment = document.createDocumentFragment();

  if (!data.length) {
    const div = document.createElement("div");
    div.classList.add("schedules-void");
    div.textContent = "Não há registros no banco de dados.";
    fragment.appendChild(div);
    return fragment;
  }
  // 4. Define os períodos do dia em milissegundos desde meia-noite
  const periods = {
    morning: { label: "Manhã", start: 32400000, end: 46799000 }, // 09:00 – 12:59
    afternoon: { label: "Tarde", start: 46800000, end: 64799000 }, // 13:00 – 17:59
    night: { label: "Noite", start: 64800000, end: 75600000 }, // 18:00 – 20:59
  };

  // 5. Estrutura para agrupar os agendamentos por período
  const periodGroups = {
    morning: [],
    afternoon: [],
    night: [],
  };

  // 6. Classifica cada item da API no período correspondente com base no horário
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

  // 7. Cria o elemento <div> pai que vai agrupar todos os horários (schedules)
  const appointments = document.createElement("div");
  appointments.classList.add("appointments", "flex", "column");
  appointments.id = "appointments-id";

  // 8. Para cada grupo com agendamentos, monta os blocos visuais
  for (const [key, group] of Object.entries(periodGroups)) {
    // Ignora períodos sem agendamentos
    if (group.length === 0) continue;

    // Extrai os dados do período atual
    const { start, end, label } = periods[key];

    // 8.1 Cria o cabeçalho do período (ex: ícone e texto da "Manhã")
    const header = await headerSchedules(start, end, label);

    // 8.2 Cria a lista de horários individuais (ex: cards ou blocos)
    const hours = await scheduleHours(group);

    // 8.3 Agrupa o cabeçalho e os horários em um bloco único
    const schedules = await schedule(header, hours);

    // 8.4 Adiciona o bloco à <div class="appointments">
    appointments.appendChild(schedules);
  }

  // 9. Adiciona o bloco final de appointments ao fragmento
  fragment.appendChild(appointments);

  // 10. Retorna o fragmento completo com toda a estrutura pronta para renderização
  return fragment;
}

async function schedule(header_schedules, schedule_hours) {
  const schedule = document.createElement("div");
  schedule.classList.add("schedules");

  schedule.append(header_schedules, schedule_hours);

  return schedule;
}

async function createAppointments(schedule) {
  const appointments = document.createElement("div");
  appointments.classList.add("appointments", "flex", "column");
  appointments.id = "appointments-id";

  appointments.append(schedule);

  return appointments;
}
