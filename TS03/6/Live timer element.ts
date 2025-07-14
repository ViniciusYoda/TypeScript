// Tipo global para evitar TypeScript reclamar do atributo personalizado

class LiveTimer extends HTMLElement {
  private timer?: number;
  private rendered = false;
  private timerElem!: HTMLElement;
  private date!: Date;

  render() {
    this.innerHTML = `
      <time-formatted hour="numeric" minute="numeric" second="numeric">
      </time-formatted>
    `;

    const child = this.firstElementChild;
    if (!child) throw new Error("Missing <time-formatted> child element");
    this.timerElem = child as HTMLElement;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }

    this.timer = window.setInterval(() => this.update(), 1000);
  }

  update() {
    this.date = new Date();
    this.timerElem.setAttribute('datetime', this.date.toISOString());
    this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
  }

  disconnectedCallback() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

customElements.define("live-timer", LiveTimer);


// ---------- <time-formatted> ----------

class TimeFormatted extends HTMLElement {
  private rendered = false;

  render() {
    const datetimeAttr = this.getAttribute('datetime');
    const date = datetimeAttr ? new Date(datetimeAttr) : new Date();

    const getDatePart = (
      attr: string,
      validValues: readonly string[]
    ): string | undefined => {
      const val = this.getAttribute(attr);
      return val && validValues.includes(val) ? val : undefined;
    };

    const partOptions = ['numeric', '2-digit'] as const;
    const timeZoneOptions = [
      'short',
      'long',
      'shortOffset',
      'longOffset',
      'shortGeneric',
      'longGeneric'
    ] as const;

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: getDatePart('year', partOptions) as 'numeric' | '2-digit' | undefined,
      month: getDatePart('month', partOptions) as 'numeric' | '2-digit' | undefined,
      day: getDatePart('day', partOptions) as 'numeric' | '2-digit' | undefined,
      hour: getDatePart('hour', partOptions) as 'numeric' | '2-digit' | undefined,
      minute: getDatePart('minute', partOptions) as 'numeric' | '2-digit' | undefined,
      second: getDatePart('second', partOptions) as 'numeric' | '2-digit' | undefined,
      timeZoneName: getDatePart('time-zone-name', timeZoneOptions) as Intl.DateTimeFormatOptions['timeZoneName'],
    }).format(date);
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes(): string[] {
    return [
      'datetime',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'time-zone-name',
    ];
  }

  attributeChangedCallback(name: string | null, oldValue: string | null, newValue: string | null) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.define("time-formatted", TimeFormatted);


