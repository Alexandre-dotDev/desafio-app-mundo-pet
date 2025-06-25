export function generateSchedules() {
  const horarios = [];
  const inicio = 9 * 60; // 09:00 em minutos
  const fim = 21 * 60; // 21:00 em minutos

  for (let minutos = inicio; minutos <= fim; minutos += 20) {
    const hora = String(Math.floor(minutos / 60)).padStart(2, "0");
    const min = String(minutos % 60).padStart(2, "0");
    horarios.push(`${hora}:${min}`);
  }

  return horarios;
}
