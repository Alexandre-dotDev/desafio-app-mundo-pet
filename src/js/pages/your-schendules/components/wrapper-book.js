export function wrapperBook(book) {
  const div = document.createElement("div");
  div.classList.add("wrapper-book");

  const removeSchedule = document.createElement("a");
  removeSchedule.setAttribute("data-id", "");
  removeSchedule.setAttribute("href", "#");
  removeSchedule.classList.add("remove-schedule");
  removeSchedule.textContent = "Remover agendamento";

  const agendamentoId = book.dataset.id;
  removeSchedule.dataset.id = agendamentoId;

  div.append(book, removeSchedule);

  return div;
}
