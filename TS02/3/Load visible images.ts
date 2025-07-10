/**
 * Tests if the element is visible (within the visible part of the page).
 * It's enough that the top or bottom edge of the element are visible.
 * @param elem The HTMLElement to check for visibility.
 * @returns True if any part of the element is within the viewport, false otherwise.
 */
function isVisible(elem: HTMLElement): boolean {
  let coords: DOMRect = elem.getBoundingClientRect();
  let windowHeight: number = document.documentElement.clientHeight;

  // Check if the top edge of the element is visible OR the bottom edge is visible
  let topVisible: boolean = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible: boolean = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

/**
 * A variant of the visibility test that considers the element visible if it's no more than
 * one page after/behind the current screen (for pre-loading).
 * @param elem The HTMLElement to check for extended visibility.
 * @returns True if any part of the element is within the extended viewport, false otherwise.
 */
function isVisibleExtended(elem: HTMLElement): boolean {
  let coords: DOMRect = elem.getBoundingClientRect();
  let windowHeight: number = document.documentElement.clientHeight;

  // Define an extended viewport: one screen height above and one screen height below
  let extendedTop: number = -windowHeight;
  let extendedBottom: number = 2 * windowHeight;

  // Check if the top edge is within the extended viewport OR the bottom edge is
  let topVisible: boolean = coords.top > extendedTop && coords.top < extendedBottom;
  let bottomVisible: boolean = coords.bottom < extendedBottom && coords.bottom > extendedTop;

  return topVisible || bottomVisible;
}

/**
 * Iterates through all <img> elements, checks their visibility,
 * and loads their 'data-src' if they become visible.
 */
function showVisible(): void {
  // Select all img elements. NodeListOf<HTMLImageElement> is automatically inferred.
  for (let img of document.querySelectorAll('img')) {
    // Get the real source from the 'data-src' attribute
    let realSrc: string | undefined = img.dataset.src;

    // If there's no data-src, or it has already been loaded (data-src cleared), skip
    if (!realSrc) {
      continue;
    }

    // Use the desired visibility check function (e.g., isVisible or isVisibleExtended)
    if (isVisible(img)) {
      // Disable caching for development/testing purposes.
      // This line should be removed in production code.
      realSrc += '?nocache=' + Math.random();

      // Set the actual 'src' attribute, which loads the image
      img.src = realSrc;

      // Clear the 'data-src' attribute to prevent re-loading
      img.dataset.src = '';
    }
  }
}

// Add an event listener to trigger showVisible when the user scrolls
window.addEventListener('scroll', showVisible);

// Call showVisible once on page load to load images already in view
showVisible();