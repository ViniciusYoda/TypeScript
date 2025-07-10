const grid = document.querySelector('table') as HTMLTableElement;

grid.onclick = function(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.tagName !== 'TH') return;

  const th = target as HTMLTableCellElement;

  // 'dataset.type' pode ser undefined, por isso usamos ?? 'string' para padrão
  sortGrid(th.cellIndex, th.dataset.type ?? 'string');
};

function sortGrid(colNum: number, type: string) {
  const tbody = grid.querySelector('tbody');
  if (!tbody) return;

  const rowsArray = Array.from(tbody.rows);

  let compare: (a: HTMLTableRowElement, b: HTMLTableRowElement) => number;

  switch (type) {
    case 'number':
      compare = (rowA, rowB) => {
        // Convertendo para número para evitar concatenação de strings
        return Number(rowA.cells[colNum].innerText) - Number(rowB.cells[colNum].innerText);
      };
      break;

    case 'string':
    default:
      compare = (rowA, rowB) => {
        return rowA.cells[colNum].innerText.localeCompare(rowB.cells[colNum].innerText);
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
