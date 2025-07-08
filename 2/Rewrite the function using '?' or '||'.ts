function checkAge(age: number): boolean {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
