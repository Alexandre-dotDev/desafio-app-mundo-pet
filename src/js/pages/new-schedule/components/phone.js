import IMask from "imask";
import { showToast } from "../../../components/show-toast";

export function phone() {
  const div = document.createElement("div");
  div.classList.add("phone");

  const label = document.createElement("label");
  label.setAttribute("for", "phone");
  label.textContent = "Telefone";

  const inputPhone = document.createElement("input");
  inputPhone.setAttribute("type", "text");
  inputPhone.setAttribute("name", "phone");
  inputPhone.setAttribute("id", "phone");
  inputPhone.setAttribute("placeholder", "(00) 0 0000-0000");
  inputPhone.setAttribute("maxlength", "16");
  inputPhone.setAttribute("required", "");

  // Aplica a máscara do IMask com os dois formatos
  const mask = IMask(inputPhone, {
    mask: [
      {
        mask: "(00) 0000-0000",
      },
      {
        mask: "(00) 0 0000-0000",
      },
    ],
  });

  // Validação ao perder o foco
  inputPhone.addEventListener("blur", () => {
    const rawValue = mask.unmaskedValue; // pega só números
    if (rawValue !== "" && !validarTelefone(rawValue)) {
      showToast(
        "Número de telefone inválido.\nUse formato (99) 9999-9999 ou (99) 9 9999-9999.",
        "error"
      );
      inputPhone.value = "";
      inputPhone.focus();

      return;
    }
  });

  div.append(label, inputPhone);
  return div;
}

function validarTelefone(valor) {
  // Valor esperado sem máscara: só números (10 ou 11 dígitos)
  return /^\d{10,11}$/.test(valor);
}
