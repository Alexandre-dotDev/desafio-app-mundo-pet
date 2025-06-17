import { fieldSet } from "./fieldset";

export function form() {
  const form = document.createElement("form");

  const div = document.createElement("div");
  div.classList.add("close");

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/icons/Close-Small-Fill.svg");
  img.setAttribute("alt", "Fechar");

  const h2 = document.createElement("h2");
  h2.textContent = "Agende um atendimento";

  const p = document.createElement("p");
  p.textContent = "Preencha os dados do cliente para realizar o agendamento:";

  div.append(img);
  form.append(div, h2, p, fieldSet());

  return form;
}
