export function book(obj) {
  const div = document.createElement("div");
  div.classList.add("book");
  div.setAttribute("data-id", `${obj.id}`);

  const service = document.createElement("p");
  service.classList.add("service");
  service.textContent = obj.serv;

  const owner = document.createElement("div");
  owner.classList.add("owner");

  const time = document.createElement("p");
  time.textContent = obj.time;

  const client = document.createElement("div");
  client.classList.add("client");

  const petName = document.createElement("span");
  petName.classList.add("name-pet");
  petName.textContent = obj.name_pet;

  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = `/ ${obj.name_user}`;

  client.append(petName, name);
  owner.append(time, client);
  div.append(owner, service);

  return div;
}
