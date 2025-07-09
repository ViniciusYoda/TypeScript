function ask(
  question: string,
  yes: () => void,
  no: () => void
): void {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
