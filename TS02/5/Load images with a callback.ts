function preloadImages(sources: string[], callback: () => void): void {
  let counter = 0;

  function onLoad(): void {
    counter++;
    if (counter === sources.length) {
      callback();
    }
  }

  for (const source of sources) {
    const img = document.createElement('img');
    img.onload = img.onerror = onLoad;
    img.src = source;
  }
}

// ---------- The test ----------

const sources: string[] = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

// Adiciona caracteres aleatórios para evitar cache do navegador
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}

// Para cada imagem, cria outra imagem com o mesmo src e verifica a largura
function testLoaded(): void {
  let widthSum = 0;

  for (const source of sources) {
    const img = document.createElement('img');
    img.src = source;

    // As imagens já devem estar no cache e prontas
    widthSum += img.width;
  }

  alert(widthSum); // Espera-se que retorne 300
}

preloadImages(sources, testLoaded);
