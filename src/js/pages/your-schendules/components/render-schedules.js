import { wrapperBook } from "./wrapper-book";
import { book } from "./book";

export async function renderSchedules(container, group) {
  //Verifica se o group esta vazio, se estiver retorna ao containe um text.
  if (group.length === 0) {
    container.textContent = "Nenhum agendamento encontrado.";
    return;
  }

  //Percorre o group e passa um objeto de cada vez para método book() que repassa para o método wrapBook() criar as tags do html.
  group.forEach((item) => {
    container.append(wrapperBook(book(item)));
  });
}
