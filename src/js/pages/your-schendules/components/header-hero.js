export function headerHero() {
  const header = document.createElement("header");
  header.classList.add("header-hero", "flex", "column");
  const div = document.createElement("div");
  div.classList.add("hero", "flex", "column");
  const h1 = document.createElement("h1");
  h1.textContent = "Sua Agenda";
  const p = document.createElement("p");
  p.textContent =
    "Aqui você pode ver todos os clientes e serviços agendados para hoje.";

  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");
  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "data");

  div.append(h1, p);
  inputWrapper.append(input);
  header.append(div, inputWrapper);

  return header;
}
