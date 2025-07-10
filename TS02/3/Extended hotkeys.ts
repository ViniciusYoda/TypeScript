function runOnKeys(func: () => void, ...codes: string[]): void {
  let pressed: Set<string> = new Set(); // Use a Set to store currently pressed key codes

  document.addEventListener('keydown', function(event: KeyboardEvent): void {
    pressed.add(event.code); // Add the pressed key's code to the set

    // Check if all required codes are currently pressed
    for (let code of codes) {
      if (!pressed.has(code)) {
        return; // If any required code is not pressed, exit
      }
    }

    // If all required codes are in the 'pressed' set:
    // Reset the 'pressed' set to prevent "sticky" key behavior.
    // This ensures the user must release and re-press all keys to trigger the hotkey again.
    pressed.clear();

    func(); // Execute the provided function
  });

  document.addEventListener('keyup', function(event: KeyboardEvent): void {
    pressed.delete(event.code); // Remove the released key's code from the set
  });
}

// Example Usage:
runOnKeys(
  () => alert("Hello!"), // The function to execute
  "KeyQ",                  // Required key code 1
  "KeyW"                   // Required key code 2
);