const hider = document.getElementById('hider');
const text = document.getElementById('text');

if (hider && text) {
  hider.addEventListener('click', () => {
    (text as HTMLElement).hidden = true;
  });
} else {
  console.warn('Elemento "hider" ou "text" não encontrado no DOM.');
}
