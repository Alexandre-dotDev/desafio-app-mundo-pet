import dayjs from "dayjs";
import { showToast } from "../../../components/show-toast";

export function date() {
  const div = document.createElement("div");
  div.classList.add("form-date");

  const label = document.createElement("label");
  label.setAttribute("for", "filter-date");
  label.textContent = "Data";

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "form-date");
  inputDate.setAttribute("id", "filter-date");
  inputDate.setAttribute("required", "");
  inputDate.value = dayjs().format("YYYY-MM-DD");

  inputDate.addEventListener("blur", (event) => {
    const date = event.target.value;
    const currentDate = dayjs().format("YYYY-MM-DD");

    if (date < currentDate) {
      showToast(
        `A data ${dayjs(date).format(
          "DD/MM/YYYY"
        )} precisar ser igual a ${dayjs(currentDate).format(
          "DD/MM/YYYY"
        )} ou maior.`,
        "error"
      );
      return;
    }
  });

  div.append(label, inputDate);

  return div;
}
