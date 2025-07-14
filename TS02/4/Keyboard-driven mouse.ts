const mouse = document.getElementById('mouse') as HTMLElement;

mouse.tabIndex = 0;

mouse.onclick = () => {
  const rect = mouse.getBoundingClientRect();

  mouse.style.left = `${rect.left}px`;
  mouse.style.top = `${rect.top}px`;
  mouse.style.position = 'fixed';
};

mouse.onkeydown = (e: KeyboardEvent) => {
  const currentLeft = parseInt(mouse.style.left || '0', 10);
  const currentTop = parseInt(mouse.style.top || '0', 10);

  switch (e.key) {
    case 'ArrowLeft':
      mouse.style.left = `${currentLeft - mouse.offsetWidth}px`;
      return false;
    case 'ArrowUp':
      mouse.style.top = `${currentTop - mouse.offsetHeight}px`;
      return false;
    case 'ArrowRight':
      mouse.style.left = `${currentLeft + mouse.offsetWidth}px`;
      return false;
    case 'ArrowDown':
      mouse.style.top = `${currentTop + mouse.offsetHeight}px`;
      return false;
  }
};
