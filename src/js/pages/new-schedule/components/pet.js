import { showToast } from "../../../components/show-toast";

export function pet() {
  const maxCaracter = 15;
  const minCaracter = 2;
  const div = document.createElement("div");
  div.classList.add("pet");

  const label = document.createElement("label");
  label.setAttribute("for", "pet-name");
  label.textContent = "Nome do pet";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "pet-name");
  input.setAttribute("id", "pet-name");
  input.setAttribute("placeholder", "Nome do pet");
  input.setAttribute("maxlength", `${maxCaracter}`);
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
