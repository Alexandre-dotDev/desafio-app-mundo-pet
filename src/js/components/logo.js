export function logo() {
  const logo = document.createElement("div");
  logo.classList.add("logo", "flex", "center");

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/icons/Dog-Duotone-Logo.svg");
  img.setAttribute("alt", "Logomarca de cachorro");

  const p = document.createElement("p");
  p.textContent = "Mundo Pet";

  logo.append(img, p);

  return logo;
}
