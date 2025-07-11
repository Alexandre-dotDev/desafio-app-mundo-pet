import { book } from "./book";
import { wrapperBook } from "./wrapper-book";

//Cria uma div que receberá seus elementos internos do método renderSchedules().
export async function scheduleHours(group) {
  const div = document.createElement("div");
  div.classList.add("schedule-hours");

  //Atualiza os valores em tela
  group.forEach((item) => {
    div.append(wrapperBook(book(item)));
  });
  return div;
}
