// Assume 'arrowTop' is an HTMLElement that you've already queried from the DOM,
// e.g., const arrowTop = document.getElementById('arrowTop') as HTMLElement;
declare const arrowTop: HTMLElement; // This line is for demonstration if 'arrowTop' is global

arrowTop.onclick = function(): void {
  // Scrolls the window to the top (Y-coordinate 0) while maintaining the current horizontal scroll.
  // window.pageXOffset is deprecated; use window.scrollX instead.
  window.scrollTo(window.scrollX, 0);
  // After scrollTo, a "scroll" event will be dispatched, which will automatically hide the arrow
  // due to the scroll event listener below.
};

window.addEventListener('scroll', function(): void {
  // Hide the 'arrowTop' element if the vertical scroll position (pageYOffset)
  // is less than the client height of the document (i.e., less than one full screen down).
  // window.pageYOffset is deprecated; use window.scrollY instead.
  arrowTop.hidden = (window.scrollY < document.documentElement.clientHeight);
});