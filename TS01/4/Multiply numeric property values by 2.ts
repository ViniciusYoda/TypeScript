function multiplyNumeric(obj: Record<string, any>): void {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
