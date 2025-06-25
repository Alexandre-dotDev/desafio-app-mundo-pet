import { showToast } from "../../../components/show-toast";

export function tutor() {
  const maxCaracter = 20;
  const minCaracter = 2;

  const div = document.createElement("div");
  div.classList.add("tutor");

  const label = document.createElement("label");
  label.setAttribute("for", "name-tutor");
  label.textContent = "Nome do tutor";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "name-tutor");
  input.setAttribute("id", "name-tutor");
  input.setAttribute("maxlength", `${maxCaracter}`);
  input.setAttribute("placeholder", "Seu nome");
  input.setAttribute("required", "");

  input.addEventListener("blur", (event) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const caracter = event.target.value;
    if (
      typeof caracter !== "string" ||
      !regex.test(caracter) ||
      caracter < minCaracter
    ) {
      showToast(
        `Máximo de caracteres ${maxCaracter}.\nMínimo de caracteres ${minCaracter}.\nSomente letras são permitidas.`,
        "error"
      );
      return;
    }

    return;
  });

  div.append(label, input);

  return div;
}
