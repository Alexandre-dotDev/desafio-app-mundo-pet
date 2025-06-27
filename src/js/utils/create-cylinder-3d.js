import { trackMouseInElement } from "./track-mouse-position";

export function createCylinder3D({ containerElement, data, onSelect }) {
  if (!(containerElement instanceof HTMLElement)) {
    console.warn(`Elemento container inválido fornecido.`);
    return;
  }

  const cylinderEl = containerElement.querySelector(".cylinder");
  if (!(cylinderEl instanceof HTMLElement)) {
    console.warn(`Elemento .cylinder não encontrado.`);
    return;
  }

  const rootStyles = getComputedStyle(document.documentElement);
  const faceWidth =
    parseInt(rootStyles.getPropertyValue("--largura-face")) || 220;
  const radius = parseInt(rootStyles.getPropertyValue("--raio")) || 150;

  function chunkArrayByWidth(arr, maxWidth = 220) {
    const chunks = [];
    let currentChunk = [];
    let currentWidth = 0;

    arr.forEach((item) => {
      const estimatedWidth = item.length * 8 + 20;
      if (currentWidth + estimatedWidth > maxWidth && currentChunk.length > 0) {
        chunks.push(currentChunk);
        currentChunk = [];
        currentWidth = 0;
      }
      currentChunk.push(item);
      currentWidth += estimatedWidth;
    });

    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }

    return chunks;
  }

  const facesData = chunkArrayByWidth(data, faceWidth);
  const facesCount = facesData.length;

  document.documentElement.style.setProperty("--faces", facesCount);

  cylinderEl.innerHTML = "";

  const angle = 360 / facesCount;

  for (let i = 0; i < facesCount; i++) {
    const face = document.createElement("div");
    face.className = "face";
    const id = i + 1;
    face.setAttribute("id", `${id}`);

    // Adiciona os botões (sem listener individual)
    facesData[i].forEach((text, index) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.setAttribute("id", `${id}-${index}`);
      face.appendChild(btn);
      trackMouseInElement(btn);
    });

    face.style.transform = `translateY(-50%) rotateX(${
      i * angle
    }deg) translateZ(${radius}px)`;

    cylinderEl.appendChild(face);
  }

  // === NOVO: Delegação de evento para os botões dentro do cilindro ===
  // Em vez de adicionar listener individual a cada botão, adicionamos um único listener no container 'cylinderEl'
  // Isso reduz o número de listeners e facilita a remoção posterior, evitando vazamento de memória.
  const onClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      const text = e.target.textContent;
      if (typeof onSelect === "function") {
        onSelect(text);
      }
    }
  };
  cylinderEl.addEventListener("click", onClick);

  function updateFaceVisibility(rotationX) {
    const faces = cylinderEl.querySelectorAll(".face");
    const totalFaces = faces.length;
    const anglePerFace = 360 / totalFaces;

    faces.forEach((face, i) => {
      const angle = (i * anglePerFace - (rotationX % 360) + 360) % 360;
      const isVisible = angle < 90 || angle > 270;
      face.style.visibility = isVisible ? "visible" : "hidden";
    });
  }

  let rotationX = 0;

  // === NOVO: Handler para o evento wheel separado para facilitar remoção ===
  // Listener para rotacionar o cilindro com a roda do mouse
  const onWheel = (e) => {
    e.preventDefault();
    rotationX += e.deltaY * 0.3;
    cylinderEl.style.transform = `rotateX(${rotationX}deg)`;
  };

  // Adiciona o listener wheel ao containerElement
  containerElement.addEventListener("wheel", onWheel, { passive: false });

  // === NOVO: Retorna objeto com método destroy para limpar listeners e evitar vazamento ===
  // Isso permite que o usuário da função limpe os eventos e elementos quando o cilindro não for mais necessário
  return {
    destroy() {
      // Remove listener do scroll
      containerElement.removeEventListener("wheel", onWheel);
      // Remove listener de clique delegado
      cylinderEl.removeEventListener("click", onClick);
      // Limpa o conteúdo do cilindro para liberar memória
      cylinderEl.innerHTML = "";
    },
  };
}
