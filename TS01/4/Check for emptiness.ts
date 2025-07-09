function isEmpty(obj: Record<string, unknown>): boolean {
  for (let key in obj) {
    return false;
  }
  return true;
}
