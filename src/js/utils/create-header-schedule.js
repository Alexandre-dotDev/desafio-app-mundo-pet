export function createHeaderSchedule(
  text_hours,
  name_img,
  text_alt,
  text_period
) {
  const header = document.createElement("header");
  header.classList.add("header-schedules");

  const p = document.createElement("p");
  p.textContent = `${text_hours}`;

  const period = document.createElement("div");
  period.classList.add("period");

  const img = document.createElement("img");
  img.setAttribute("src", `./assets/icons/${name_img}`);
  img.setAttribute("alt", `${text_alt}`);

  const morning = document.createElement("p");
  morning.textContent = `${text_period}`;

  period.append(img, morning);
  header.append(period, p);

  return header;
}
