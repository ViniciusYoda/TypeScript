let array: number[] = [1, 2, 3];

array = new Proxy(array, {
  get(target: number[], prop: string | symbol, receiver: any): any {
    // Check if the property is a string representation of a number and is negative
    if (typeof prop === 'string' && !isNaN(Number(prop)) && Number(prop) < 0) {
      // Convert prop to a number and adjust for negative indexing
      prop = String(Number(prop) + target.length);
    }
    return Reflect.get(target, prop, receiver);
  }
});

alert(array[-1]); // 3
alert(array[-2]); // 2