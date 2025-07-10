const table2 = document.getElementById('my-table') as HTMLTableElement | null;

if (!table) {
  throw new Error("Tabela com id 'my-table' não foi encontrada.");
}

const tbody = table.tBodies[0];
if (!tbody) {
  throw new Error("A tabela não possui um <tbody>.");
}

const sortedRows: HTMLTableRowElement[] = Array.from(tbody.rows)
  .sort((rowA, rowB) => {
    const cellA = rowA.cells[0]?.innerHTML ?? '';
    const cellB = rowB.cells[0]?.innerHTML ?? '';
    return cellA.localeCompare(cellB);
  });

tbody.append(...sortedRows);
