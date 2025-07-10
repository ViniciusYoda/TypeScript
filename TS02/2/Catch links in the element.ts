const contents = document.getElementById('contents');

if (contents) {
  contents.onclick = function (event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('a');

    if (target && contents.contains(target)) {
      const href = target.getAttribute('href');
      const isLeaving = confirm(`Leave for ${href}?`);

      if (!isLeaving) {
        event.preventDefault(); // impede navegação
      }
    }
  };
}
