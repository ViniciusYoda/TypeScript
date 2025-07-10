function populate(): void {
  while (true) {
    // Get the bottom edge of the document (or html element) relative to the viewport.
    let windowRelativeBottom: number = document.documentElement.getBoundingClientRect().bottom;

    // If the bottom of the document is more than 100 pixels below the current viewport height,
    // it means there's enough content, so we can stop adding more.
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) {
      break;
    }

    // Insert a new paragraph with the current date before the end of the body element.
    document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
  }
}

// Add an event listener to the window's scroll event, which will trigger the populate function.
window.addEventListener('scroll', populate);

// Call populate once initially to fill the screen with content on page load.
populate();