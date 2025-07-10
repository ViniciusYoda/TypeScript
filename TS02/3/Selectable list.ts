// Assuming 'ul' is defined and refers to an <ul> element in your HTML.
// You might get it like this, for example:
// const ul = document.getElementById('myList') as HTMLUListElement;
// For this snippet, we'll assume 'ul' is already correctly typed or obtained from the DOM.
declare const ul: HTMLUListElement; // This line is for demonstration if 'ul' is global

ul.onclick = function(event: MouseEvent): void {
  // Ensure event.target is an HTMLElement and check its tagName
  const target = event.target as HTMLElement;

  // Check if the clicked element is an <li> element
  if (target.tagName !== "LI") {
    return;
  }

  // Check for Ctrl (Windows/Linux) or Cmd (macOS) key press for multi-selection
  if (event.ctrlKey || event.metaKey) {
    toggleSelect(target);
  } else {
    singleSelect(target);
  }
};

// Prevent text selection when clicking and dragging on the list
ul.onmousedown = function(): boolean {
  return false;
};

/**
 * Toggles the 'selected' class on a given list item.
 * @param li The <li> element to toggle selection for.
 */
function toggleSelect(li: HTMLElement): void {
  li.classList.toggle('selected');
}

/**
 * Selects a single list item, deselecting all others in the list.
 * @param li The <li> element to select.
 */
function singleSelect(li: HTMLElement): void {
  // Select all currently selected elements within the <ul>
  let selected: NodeListOf<HTMLElement> = ul.querySelectorAll('.selected');
  
  // Remove 'selected' class from all previously selected elements
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
  
  // Add 'selected' class to the clicked list item
  li.classList.add('selected');
}