import dayjs from "dayjs";

/**
 * Monitora dinamicamente um input date e chama o callback com true/false.
 * Aguarda até que o input exista no DOM.
 */
export function watchDateValidation(selector, callback) {
  let attempts = 0;
  const maxAttempts = 50; // evita loop infinito (máx 5 segundos)

  const check = setInterval(() => {
    const input = document.querySelector(selector);

    if (input && input.type === "date") {
      clearInterval(check); // para o intervalo

      function validateDate(value) {
        const inputDate = dayjs(value, "YYYY-MM-DD");
        const today = dayjs().startOf("day");
        const isValid = !inputDate.isBefore(today);
        callback(isValid);
      }

      input.addEventListener("change", () => {
        validateDate(input.value);
      });

      if (input.value) {
        validateDate(input.value);
      }
    } else if (++attempts > maxAttempts) {
      clearInterval(check);
      console.warn("Input date não encontrado após várias tentativas.");
    }
  }, 100); // verifica a cada 100ms
}
