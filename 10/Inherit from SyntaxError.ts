class FormatError extends SyntaxError {
  constructor(message: string) {
    super(message); // Call the parent (SyntaxError) constructor with the message
    this.name = this.constructor.name; // Set the name to the class name ("FormatError")
  }
}

let err = new FormatError("formatting error");

alert(err.message); // formatting error
alert(err.name);    // FormatError
alert(err.stack);   // [Outputs the call stack, specific content varies by environment]
alert(err instanceof SyntaxError); // true