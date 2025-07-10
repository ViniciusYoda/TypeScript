'use strict';

// Define an interface for the constructor options
interface HoverIntentOptions {
  sensitivity?: number;
  interval?: number;
  elem: HTMLElement; // 'elem' should be an HTMLElement
  over: (this: HTMLElement, event?: MouseEvent) => void; // Type 'this' for the callback
  out: (this: HTMLElement, event?: MouseEvent) => void;  // Type 'this' for the callback
}

class HoverIntent {
  private sensitivity: number;
  private interval: number;
  private elem: HTMLElement;
  private over: (this: HTMLElement, event?: MouseEvent) => void;
  private out: (this: HTMLElement, event?: MouseEvent) => void;

  // Internal state properties
  private isOverElement: boolean = false;
  private isHover: boolean = false;
  private prevX: number = 0;
  private prevY: number = 0;
  private prevTime: number = 0;
  private lastX: number = 0;
  private lastY: number = 0;
  private lastTime: number = 0;
  private checkSpeedInterval?: number; // Stores the ID of setInterval

  constructor({
    sensitivity = 0.1,
    interval = 100,
    elem,
    over,
    out
  }: HoverIntentOptions) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // Bind 'this' context for event handlers and interval function
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.trackSpeed = this.trackSpeed.bind(this);

    // Add initial event listeners
    this.elem.addEventListener("mouseover", this.onMouseOver);
    this.elem.addEventListener("mouseout", this.onMouseOut);
  }

  onMouseOver(event: MouseEvent): void {
    // If we're already "over" the element, ignore the event
    if (this.isOverElement) {
      return;
    }

    this.isOverElement = true;

    // Store initial mouse coordinates and time
    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();

    // Start listening for mouse movement
    this.elem.addEventListener('mousemove', this.onMouseMove);
    // Start interval to track mouse speed
    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval) as unknown as number; // Type assertion for setInterval ID
  }

  onMouseOut(event: MouseEvent): void {
    // Check if the mouse has truly left the element (not just moved to a child)
    // event.relatedTarget is the element the mouse cursor entered.
    // elem.contains(event.relatedTarget) checks if the new element is inside 'elem'.
    if (!event.relatedTarget || !this.elem.contains(event.relatedTarget as Node)) {
      this.isOverElement = false;
      this.elem.removeEventListener('mousemove', this.onMouseMove); // Stop tracking mouse movement
      clearInterval(this.checkSpeedInterval); // Stop speed tracking interval

      if (this.isHover) {
        // If the "hover intent" was registered, call the 'out' callback
        this.out.call(this.elem, event); // Call with 'this' set to the element
        this.isHover = false; // Reset hover state
      }
    }
  }

  onMouseMove(event: MouseEvent): void {
    // Update last known mouse coordinates and time
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();
  }

  trackSpeed(): void {
    let speed: number;

    // If cursor didn't move or time hasn't passed
    if (!this.lastTime || this.lastTime === this.prevTime) {
      speed = 0;
    } else {
      // Calculate speed (distance / time)
      speed = Math.sqrt(
        Math.pow(this.prevX - this.lastX, 2) +
        Math.pow(this.prevY - this.lastY, 2)
      ) / (this.lastTime - this.prevTime);
    }

    if (speed < this.sensitivity) {
      // If speed is below sensitivity, "hover intent" is detected
      clearInterval(this.checkSpeedInterval); // Stop tracking speed
      this.isHover = true; // Set hover state
      this.over.call(this.elem); // Call the 'over' callback with 'this' set to the element
    } else {
      // Speed is fast, update previous coordinates for the next measurement
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }

  // Method to clean up event listeners and intervals
  destroy(): void {
    this.elem.removeEventListener('mousemove', this.onMouseMove);
    this.elem.removeEventListener('mouseover', this.onMouseOver);
    this.elem.removeEventListener('mouseout', this.onMouseOut);
    clearInterval(this.checkSpeedInterval);
  }
}

// Example usage (assuming 'elem' and 'tooltip' are defined elsewhere, e.g., in HTML/JS)
// For demonstration, let's define them:
declare const elem: HTMLElement; // Assume 'elem' exists in the global scope (e.g., from HTML)
declare const tooltip2: HTMLElement; // Assume 'tooltip' exists in the global scope

new HoverIntent({
  elem: elem, // Pass the actual HTML element
  over(this: HTMLElement) { // Type 'this' explicitly here
    // 'this' inside 'over' refers to 'elem' due to .call(this.elem)
    tooltip2.style.left = this.getBoundingClientRect().left + 5 + 'px';
    tooltip2.style.top = this.getBoundingClientRect().bottom + 5 + 'px';
    tooltip2.hidden = false;
  },
  out(this: HTMLElement) { // Type 'this' explicitly here
    // 'this' inside 'out' refers to 'elem' due to .call(this.elem)
    tooltip2.hidden = true;
  }
});