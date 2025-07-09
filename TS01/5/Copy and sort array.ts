function copySorted(arr: string[]): string[] {
  return arr.slice().sort();
}

let arr2: string[] = ["HTML", "JavaScript", "CSS"];

let sorted: string[] = copySorted(arr2);

alert(sorted); // CSS, HTML, JavaScript
alert(arr);    // HTML, JavaScript, CSS
