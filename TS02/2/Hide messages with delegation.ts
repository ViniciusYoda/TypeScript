const container = document.getElementById('container');
if (container) {
  container.onclick = function(event) {
    const target = event.target as HTMLElement;

    if (!target.classList.contains('remove-button')) return;

    const pane = target.closest('.pane');
    if (pane) {
      pane.remove();
    }
  };
} else {
  console.warn('Elemento com id "container" não encontrado.');
}
