function truncate(str: string, maxlength: number): string {
  return (str.length > maxlength)
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

const t1 = truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

const t2 = truncate("Hi everyone!", 20) == "Hi everyone!"

console.log(t1)
console.log(t2)