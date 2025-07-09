function filterRange(arr: number[], a: number, b: number): number[] {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr: number[] = [5, 3, 8, 1];

let filtered: number[] = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
