function makeEaseOut(timing: (timeFraction: number) => number): (timeFraction: number) => number {
  return function(timeFraction: number): number {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction: number): number {
  for (let a = 0, b = 1; true; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

interface AnimateOptions {
  duration: number;
  timing: (timeFraction: number) => number;
  draw: (progress: number) => void;
}

function animate({duration, timing, draw}: AnimateOptions): void {
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

// Referência aos elementos, assumindo que existem no DOM
const ball = document.getElementById('ball') as HTMLElement;
const field = document.getElementById('field') as HTMLElement;

if (ball && field) {
  ball.onclick = function() {
    const to = field.clientHeight - ball.clientHeight;

    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw(progress: number) {
        ball.style.top = to * progress + 'px';
      }
    });
  }
}
