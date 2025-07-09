// The `prompt` function is a global function available in browser environments.
// It returns `string | null` because the user can cancel the prompt.
let expr: string | null = prompt("Type an arithmetic expression?", '2*3+2');

// Check if the user entered anything (didn't cancel and didn't enter an empty string)
if (expr !== null && expr.trim() !== '') {
  // `eval` is a powerful and dangerous function, so TypeScript discourages its use.
  // It effectively types the return as `any`.
  // When using `eval`, you are opting out of TypeScript's type safety for that part.
  try {
    const result: any = eval(expr);
    alert(result);
  } catch (e: any) {
    alert(`Error evaluating expression: ${e.message}`);
  }
} else {
  alert("No expression entered.");
}