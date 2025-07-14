const form = document.forms.namedItem('calculator') as HTMLFormElement;

const moneyInput = form.money as HTMLInputElement;
const monthsInput = form.months as HTMLSelectElement;
const interestInput = form.interest as HTMLInputElement;

moneyInput.oninput = calculate;
monthsInput.onchange = calculate;
interestInput.oninput = calculate;

function calculate(): void {
  const initial = parseFloat(moneyInput.value);
  if (!initial) return;

  const interest = parseFloat(interestInput.value) * 0.01;
  if (!interest) return;

  const years = parseInt(monthsInput.value, 10) / 12;
  if (!years) return;

  const result = Math.round(initial * Math.pow(1 + interest, years));

  const height = (result / initial * 100) + 'px';

  const heightAfter = document.getElementById('height-after') as HTMLElement;
  const moneyBefore = document.getElementById('money-before') as HTMLElement;
  const moneyAfter = document.getElementById('money-after') as HTMLElement;

  if (heightAfter && moneyBefore && moneyAfter) {
    heightAfter.style.height = height;
    moneyBefore.innerHTML = initial.toString();
    moneyAfter.innerHTML = result.toString();
  }
}

calculate();
