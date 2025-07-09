class Clock2 {
  protected template: string; // Changed to protected to allow access in subclasses
  protected timer?: number;   // Changed to protected

  constructor({ template }: { template: string }) {
    this.template = template;
  }

  render(): void {
    let date = new Date();

    let hours: string | number = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins: string | number = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs: string | number = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output: string = this.template
      .replace('h', String(hours))
      .replace('m', String(mins))
      .replace('s', String(secs));

    console.log(output);
  }

  stop(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
  }

  start(): void {
    this.render();
    // Using `as unknown as number` for setInterval ID, common in browser environments
    this.timer = setInterval(() => this.render(), 1000) as unknown as number;
  }
}

interface ExtendedClockOptions {
  template: string;
  precision?: number; // precision is optional
}

class ExtendedClock extends Clock2 {
  private precision: number;

  constructor(options: ExtendedClockOptions) {
    super(options); // Pass all options to the super constructor

    // Destructure precision with a default value
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  // Override the start method to use the custom precision
  start(): void {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision) as unknown as number;
  }
}

// Example usage (optional, for testing)
// let myClock = new Clock({ template: 'h:m:s' });
// myClock.start(); // This will tick every 1 second

// let fastClock = new ExtendedClock({ template: 'h:m:s', precision: 500 });
// fastClock.start(); // This will tick every 0.5 seconds