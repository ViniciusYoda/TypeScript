function makeEaseOut2(timing: (timeFraction: number) => number): (timeFraction: number) => number {
  return function(timeFraction: number): number {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce2(timeFraction: number): number {
  for (let a = 0, b = 1; true; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function quad2(timeFraction: number): number {
  return Math.pow(timeFraction, 2);
}

interface AnimateOptions {
  duration: number;
  timing: (timeFraction: number) => number;
  draw: (progress: number) => void;
}

function animate2({duration, timing, draw}: AnimateOptions): void {
  const start = performance.now();

  requestAnimationFrame(function animateFrame(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animateFrame);
    }
  });
}

// Pegando elementos com tipo HTMLElement e checando se existem
const ball2 = document.getElementById('ball') as HTMLElement | null;
const field2 = document.getElementById('field') as HTMLElement | null;

if (ball && field) {
  ball.onclick = function () {
    const height = field.clientHeight - ball.clientHeight;
    const width = 100;

    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw(progress: number) {
        ball.style.top = height * progress + 'px';
      }
    });

    animate({
      duration: 2000,
      timing: makeEaseOut(quad2),
      draw(progress: number) {
        ball.style.left = width * progress + 'px';
      }
    });
  };
}
