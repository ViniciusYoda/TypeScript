const tree: HTMLDivElement = document.createElement('div');

tree.onclick = function(event) {
  const target = event.target as HTMLElement;
  
  if (target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = target.parentNode?.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
};
