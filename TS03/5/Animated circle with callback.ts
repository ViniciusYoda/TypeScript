function go(): void {
  showCircle2(150, 150, 100, (div) => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle2(
  cx: number,
  cy: number,
  radius: number,
  callback: (div: HTMLDivElement) => void
): void {
  const div = document.createElement('div');

  div.style.position = 'absolute';
  div.style.width = '0px';
  div.style.height = '0px';
  div.style.left = `${cx}px`;
  div.style.top = `${cy}px`;
  div.className = 'circle';

  document.body.appendChild(div);

  setTimeout(() => {
    div.style.width = `${radius * 2}px`;
    div.style.height = `${radius * 2}px`;

    const onTransitionEnd = () => {
      div.removeEventListener('transitionend', onTransitionEnd);
      callback(div);
    };

    div.addEventListener('transitionend', onTransitionEnd);
  }, 0);
}
