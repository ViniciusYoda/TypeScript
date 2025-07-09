async function wait(): Promise<number> {
  await new Promise<void>(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f(): void {
  // shows 10 after 1 second
  wait().then(result => alert(result));
}

f();