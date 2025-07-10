const panes = document.querySelectorAll('.pane');

panes.forEach(pane => {
  if (!(pane instanceof HTMLElement)) return;

  // Adiciona botão [x] no início de cada pane
  pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');

  const button = pane.querySelector('.remove-button') as HTMLButtonElement | null;

  if (button) {
    button.onclick = () => {
      pane.remove();
    };
  }
});
