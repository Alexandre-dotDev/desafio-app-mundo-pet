import { showToast } from "../../../components/show-toast";

export function textarea() {
  const maxCaracter = 40;
  const minCaracter = 4;
  const div = document.createElement("div");
  div.classList.add("textarea");

  const label = document.createElement("label");
  label.setAttribute("for", "description");
  label.textContent = "Descrição de serviço";

  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("maxlength", `${maxCaracter}`);
  textarea.setAttribute("placeholder", "Banho e tosa");
  textarea.setAttribute("required", "");

  textarea.addEventListener("blur", (event) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s:.,-]+$/;
    const caracter = event.target.value;
    if (
      typeof caracter !== "string" ||
      !regex.test(caracter) ||
      caracter.length < minCaracter
    ) {
      showToast(
        `Máximo de caracteres ${maxCaracter}.\nMínimo de caracteres ${minCaracter}.`,
        "error"
      );
      return;
    }

    return;
  });

  div.append(label, textarea);

  return div;
}
