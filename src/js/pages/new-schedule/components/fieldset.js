import { buttonToSchedule } from "./button-to-schedule";
import { dateTime } from "./date-time";
import { pet } from "./pet";
import { phone } from "./phone";
import { textarea } from "./textarea";
import { tutor } from "./tutor";

export function fieldSet() {
  const fieldset = document.createElement("fieldset");

  fieldset.append(
    tutor(),
    pet(),
    phone(),
    textarea(),
    dateTime(),
    buttonToSchedule()
  );

  return fieldset;
}
