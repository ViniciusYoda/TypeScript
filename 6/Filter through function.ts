function inArray(arr: number[]): (x: number) => boolean {
  return function(x: number): boolean {
    return arr.includes(x);
  };
}

let arr5: number[] = [1, 2, 3, 4, 5, 6, 7];
alert( arr5.filter(inArray([1, 2, 10])) ); // 1,2
