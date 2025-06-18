import { v4 as uuid4 } from "uuid";

export function collectFormData() {
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
    return null;
  }

  const id = uuid4();

  const name_user = inputTutor.value.trim();
  const name_pet = inputPet.value.trim();
  const phone = inputPhone.value.trim();
  const serv = textareaServ.value.trim();
  const date = inputDate.value.trim();
  const time = inputTime.value.trim();

  if (!name_user || !name_pet || !phone || !serv || !date || !time) {
    alert("Preencha todos os campos.");
    return null;
  }

  return {
    id,
    name_user,
    name_pet,
    phone,
    serv,
    date,
    time,
  };
}
