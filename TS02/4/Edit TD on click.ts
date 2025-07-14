const table = document.getElementById('bagua-table') as HTMLTableElement;
let editingTd: { elem: HTMLTableCellElement; data: string } | null = null;

table.onclick = function (event: MouseEvent): void {
  const target = (event.target as HTMLElement).closest('.edit-cancel, .edit-ok, td') as HTMLElement | null;

  if (!target || !table.contains(target)) return;

  if (target.classList.contains('edit-cancel')) {
    if (editingTd) finishTdEdit(editingTd.elem, false);
  } else if (target.classList.contains('edit-ok')) {
    if (editingTd) finishTdEdit(editingTd.elem, true);
  } else if (target.tagName === 'TD') {
    if (editingTd) return; // já está editando
    makeTdEditable(target as HTMLTableCellElement);
  }
};

function makeTdEditable(td: HTMLTableCellElement): void {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  const textArea = document.createElement('textarea');
  textArea.className = 'edit-area';
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.value = editingTd.data;

  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    'beforeend',
    `<div class="edit-controls">
      <button class="edit-ok">OK</button>
      <button class="edit-cancel">CANCEL</button>
    </div>`
  );
}

function finishTdEdit(td: HTMLTableCellElement, isOk: boolean): void {
  if (!editingTd) return;

  const textArea = td.querySelector('textarea') as HTMLTextAreaElement | null;

  if (isOk && textArea) {
    td.innerHTML = textArea.value;
  } else {
    td.innerHTML = editingTd.data;
  }

  td.classList.remove('edit-td');
  editingTd = null;
}
