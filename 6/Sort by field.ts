function byField<T>(fieldName: string) {
  return (a: T, b: T): number => {
    if (a[fieldName] > b[fieldName]) return 1;
    if (a[fieldName] < b[fieldName]) return -1;
    return 0;
  };
}
