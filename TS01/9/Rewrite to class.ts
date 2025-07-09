class Clock {
  private template: string;
  private timer?: number; // `timer` can be a number (for setInterval ID) or undefined

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
      .replace('h', String(hours)) // Ensure replacement values are strings
      .replace('m', String(mins))
      .replace('s', String(secs));

    console.log(output);
  }

  stop(): void {
    if (this.timer) { // Only clear if timer exists
      clearInterval(this.timer);
    }
  }

  start(): void {
    this.render();
    // Use `as unknown as number` to correctly type the return of setInterval in a browser context
    this.timer = setInterval(() => this.render(), 1000) as unknown as number;
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();