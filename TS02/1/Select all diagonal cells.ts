let table = document.body.firstElementChild as HTMLTableElement; // Cast to HTMLTableElement

// Check if table is not null and is indeed a table element
if (table instanceof HTMLTableElement) {
  for (let i = 0; i < table.rows.length; i++) {
    let row: HTMLTableRowElement = table.rows[i];
    // Ensure that row.cells[i] exists before trying to access style
    if (row.cells[i]) {
      row.cells[i].style.backgroundColor = 'red';
    }
  }
} else {
  console.error("The first child of body is not a table element.");
}