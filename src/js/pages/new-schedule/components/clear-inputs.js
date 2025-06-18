export function clearInputs() {
  const inputTutor = document.querySelector(".tutor #name-tutor");
  const inputPet = document.querySelector(".pet #pet-name");
  const inputPhone = document.querySelector(".phone #phone");
  const textareaServ = document.querySelector(".textarea #description");
  const inputDate = document.querySelector(".date-time .date #date");
  const inputTime = document.querySelector(".date-time .hour #hour");

  // Verifica se todos os elementos existem
  if (
    !inputTutor ||
    !inputPet ||
    !inputPhone ||
    !textareaServ ||
    !inputDate ||
    !inputTime
  ) {
    console.warn("Um ou mais campos não foram encontrados no DOM.");
    return;
  }

  inputTutor.value = "";
  inputPet.value = "";
  inputPhone.value = "";
  textareaServ.value = "";
  inputDate.value = "";
  inputTime.value = "";
}
