// Assuming 'slider' is an HTMLElement, perhaps obtained like:
// const slider = document.getElementById('mySlider') as HTMLElement;
declare const slider: HTMLElement; // For demonstration if 'slider' is global

let thumb = slider.querySelector('.thumb') as HTMLElement; // Cast to HTMLElement

// Check if thumb element was found
if (thumb) {
  thumb.onmousedown = function(event: MouseEvent): void {
    event.preventDefault(); // Prevent text selection or browser's default drag behavior

    // Calculate the initial horizontal shift (distance from mouse pointer to thumb's left edge)
    let shiftX: number = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY not needed as the thumb moves only horizontally

    // Attach event listeners for mouse movement and mouse release to the document
    // This ensures tracking even if the mouse goes outside the slider element
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // Handler for mouse movement
    function onMouseMove(event: MouseEvent): void {
      // Calculate the new 'left' position for the thumb
      // It's the mouse X minus the initial shift,
      // relative to the slider's left edge
      let newLeft: number = event.clientX - shiftX - slider.getBoundingClientRect().left;

      // Restrict the thumb's movement within the slider's boundaries
      // If the new position is less than 0, set it to 0 (left edge)
      if (newLeft < 0) {
        newLeft = 0;
      }

      // Calculate the rightmost allowed position for the thumb
      // (slider's width minus thumb's width)
      let rightEdge: number = slider.offsetWidth - thumb.offsetWidth;

      // If the new position exceeds the right edge, set it to the right edge
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      // Apply the calculated new 'left' position to the thumb's style
      thumb.style.left = newLeft + 'px';
    }

    // Handler for mouse release
    function onMouseUp(): void {
      // Remove the mousemove and mouseup listeners from the document
      // This stops the dragging operation
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  // Prevent browser's default drag-and-drop behavior for the thumb
  thumb.ondragstart = function(): boolean {
    return false;
  };
} else {
  console.error("Thumb element with class '.thumb' not found inside the slider.");
}