/**
 * Posiciona o elemento `elem` em relação ao `anchor` conforme a posição especificada.
 *
 * @param anchor Elemento de referência
 * @param position Uma das posições: 'top' | 'right' | 'bottom'
 * @param elem Elemento a ser posicionado
 */
function positionAt(anchor: HTMLElement, position: 'top' | 'right' | 'bottom', elem: HTMLElement): void {
  const anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case 'top':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
      break;

    case 'right':
      elem.style.left = `${anchorCoords.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;

    case 'bottom':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top + anchor.offsetHeight}px`;
      break;
  }
}

/**
 * Exibe uma anotação (`note`) com o HTML especificado,
 * posicionada em relação ao `anchor` conforme `position`.
 */
function showNote(anchor: HTMLElement, position: 'top' | 'right' | 'bottom', html: string): void {
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  note.style.position = 'absolute'; // necessário para posicionamento com top/left
  document.body.append(note);

  positionAt(anchor, position, note);
}

// Teste: assumindo que existe um <blockquote> no HTML
const blockquote = document.querySelector('blockquote') as HTMLElement | null;

if (blockquote) {
  showNote(blockquote, 'top', 'note above');
  showNote(blockquote, 'right', 'note at the right');
  showNote(blockquote, 'bottom', 'note below');
} else {
  console.warn('Elemento <blockquote> não encontrado no documento.');
}
