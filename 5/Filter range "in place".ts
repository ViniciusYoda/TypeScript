function filterRangeInPlace(arr: number[], a: number, b: number): void {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    // remove se estiver fora do intervalo
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr1: number[] = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // remove números fora do intervalo [1, 4]

alert(arr1); // [3, 1]
