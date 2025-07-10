type Position =
  | 'top-out'
  | 'right-out'
  | 'bottom-out'
  | 'top-in'
  | 'right-in'
  | 'bottom-in';

// Retorna coordenadas absolutas do elemento em relação ao documento
function getCoords2(elem: HTMLElement): { top: number; left: number } {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

// Posiciona `elem` em relação ao `anchor`, com base em `position`
function positionAt3(anchor: HTMLElement, position: Position, elem: HTMLElement): void {
  const anchorCoords = getCoords(anchor);

  switch (position) {
    case 'top-out':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
      break;

    case 'right-out':
      elem.style.left = `${anchorCoords.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;

    case 'bottom-out':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top + anchor.offsetHeight}px`;
      break;

    case 'top-in':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;

    case 'right-in':
      elem.style.width = '150px';
      elem.style.left = `${anchorCoords.left + anchor.offsetWidth - elem.offsetWidth}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;

    case 'bottom-in':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top + anchor.offsetHeight - elem.offsetHeight}px`;
      break;
  }

  elem.style.position = 'absolute'; // garante que top/left funcionem corretamente
}

// Cria e mostra uma nota HTML posicionada em relação ao `anchor`
function showNote3(anchor: HTMLElement, position: Position, html: string): void {
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  note.style.position = 'absolute'; // obrigatório para posicionamento
  document.body.append(note);

  positionAt3(anchor, position, note);
}

// ===== Teste =====
const blockquote3 = document.querySelector('blockquote') as HTMLElement | null;

if (blockquote3) {
  showNote3(blockquote3, 'top-in', 'note top-in');
  showNote3(blockquote3, 'top-out', 'note top-out');
  showNote3(blockquote3, 'right-out', 'note right-out');
  showNote3(blockquote3, 'bottom-in', 'note bottom-in');
} else {
  console.warn('Elemento <blockquote> não encontrado no documento.');
}
