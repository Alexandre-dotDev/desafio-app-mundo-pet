import dayjs from "dayjs";

export function dateCurrent() {
  const input = document.querySelector("#data");
  if (!input) return;

  input.value = dayjs().format("YYYY-MM-DD");

  return input.value;
}
