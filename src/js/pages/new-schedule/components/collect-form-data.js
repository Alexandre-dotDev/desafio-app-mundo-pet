import { v4 as uuid4 } from "uuid";

export function collectFormData() {
  const inputTutor = document.querySelector(".tutor #name-tutor");
  const inputPet = document.querySelector(".pet #pet-name");
  const inputPhone = document.querySelector(".phone #phone");
  const textareaServ = document.querySelector(".textarea #description");
  const inputDate = document.querySelector("#filter-date");
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

  const name_user = capitalizeName(inputTutor.value.trim());
  const name_pet = capitalizeName(inputPet.value.trim());
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

function capitalizeName(text) {
  const preposicoes = [
    "de",
    "da",
    "do",
    "das",
    "dos",
    "e",
    "em",
    "no",
    "na",
    "nos",
    "nas",
    "a",
    "o",
    "di",
  ];

  return text
    .toLowerCase()
    .split(" ")
    .map((palavra, index) => {
      if (index === 0 || !preposicoes.includes(palavra)) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
      }
      return palavra; // mantém a preposição em minúscula
    })
    .join(" ");
}
