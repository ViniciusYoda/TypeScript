function showCircle(cx: number, cy: number, radius: number): void {
  const div = document.createElement('div');

  div.style.position = 'absolute';
  div.style.width = '0px';
  div.style.height = '0px';
  div.style.left = `${cx}px`;
  div.style.top = `${cy}px`;
  div.className = 'circle';

  document.body.appendChild(div);

  // Defer the expansion to allow CSS transition to apply
  setTimeout(() => {
    div.style.width = `${radius * 2}px`;
    div.style.height = `${radius * 2}px`;
  }, 0);
}
