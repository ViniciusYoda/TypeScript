// tooltip can be an HTMLElement or false (or null/undefined)
let tooltip: HTMLElement | false | undefined;

document.onmouseover = function(event: MouseEvent): void {
  // Use event.target as HTMLElement to access closest method
  const target = event.target as HTMLElement;

  // Find the closest ancestor element with a 'data-tooltip' attribute
  let anchorElem: HTMLElement | null = target.closest('[data-tooltip]');

  if (!anchorElem) {
    return;
  }

  // Get the tooltip HTML content from the data-tooltip attribute
  const tooltipHtml: string | undefined = anchorElem.dataset.tooltip;

  // If there's no tooltip content, return
  if (tooltipHtml === undefined) {
    return;
  }

  // Show the tooltip and store the created tooltip element
  tooltip = showTooltip(anchorElem, tooltipHtml);
};

document.onmouseout = function(): void {
  // If a tooltip is currently displayed, remove it
  if (tooltip) {
    tooltip.remove();
    tooltip = false; // Reset tooltip variable
  }
};

/**
 * Creates and displays a tooltip element near an anchor element.
 * @param anchorElem The element to which the tooltip is anchored.
 * @param html The HTML content for the tooltip.
 * @returns The created tooltip HTMLElement.
 */
function showTooltip(anchorElem: HTMLElement, html: string): HTMLElement {
  let tooltipElem: HTMLDivElement = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  // Get coordinates of the anchor element
  let coords: DOMRect = anchorElem.getBoundingClientRect();

  // Calculate left position: center the tooltip horizontally above the anchor
  let left: number = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) {
    left = 0; // Prevent tooltip from going off the left edge
  }

  // Calculate top position: place the tooltip above the anchor, with 5px padding
  let top: number = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    // If there's no space above, place it below the anchor
    top = coords.top + anchorElem.offsetHeight + 5;
  }

  // Apply calculated positions
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  return tooltipElem;
}