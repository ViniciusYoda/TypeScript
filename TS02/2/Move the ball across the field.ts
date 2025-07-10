const field = document.getElementById('field') as HTMLElement | null;
const ball = document.getElementById('ball') as HTMLElement | null;

if (field && ball) {
  field.onclick = function (event: MouseEvent) {
    // Coordenadas relativas à janela
    const fieldCoords = field.getBoundingClientRect();

    // Cálculo das coordenadas relativas ao canto superior esquerdo interno do campo
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
    };

    // Limites superiores e esquerdos
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;

    // Limite direito
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // Limite inferior
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    // Aplicar posição
    ball.style.position = 'absolute';
    ball.style.left = `${ballCoords.left}px`;
    ball.style.top = `${ballCoords.top}px`;
  };
} else {
  console.warn('Elementos com ID "field" ou "ball" não foram encontrados.');
}
