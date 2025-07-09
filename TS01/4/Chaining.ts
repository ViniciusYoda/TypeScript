type Ladder = {
  step: number;
  up(): Ladder;
  down(): Ladder;
  showStep(): Ladder;
};

const ladder: Ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  }
};

// Uso encadeado:
ladder.up().up().down().showStep().down().showStep();
