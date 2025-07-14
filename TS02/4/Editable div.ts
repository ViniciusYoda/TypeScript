let area: HTMLTextAreaElement | null = null;
const view = document.getElementById('view') as HTMLElement;

if (view) {
  view.onclick = function () {
    editStart();
  };
}

function editStart(): void {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  area.onkeydown = function (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      (event.target as HTMLTextAreaElement).blur();
    }
  };

  area.onblur = function () {
    editEnd();
  };

  view.replaceWith(area);
  area.focus();
}

function editEnd(): void {
  if (area) {
    view.innerHTML = area.value;
    area.replaceWith(view);
  }
}
