class Head {
  glasses: number;

  constructor(glasses: number) {
    this.glasses = glasses;
  }
}

class Table extends Head {
  pen: number;

  constructor(pen: number, glasses: number) {
    super(glasses); // Call the parent constructor
    this.pen = pen;
  }
}

class Bed extends Table {
  sheet: number;
  pillow: number;

  constructor(sheet: number, pillow: number, pen: number, glasses: number) {
    super(pen, glasses); // Call the parent constructor
    this.sheet = sheet;
    this.pillow = pillow;
  }
}

class Pockets extends Bed {
  money: number;

  constructor(money: number, sheet: number, pillow: number, pen: number, glasses: number) {
    super(sheet, pillow, pen, glasses); // Call the parent constructor
    this.money = money;
  }
}

let head = new Head(1);
let table = new Table(3, head.glasses); // Pass head's properties explicitly
let bed = new Bed(1, 2, table.pen, table.glasses); // Pass table's properties explicitly
let pockets = new Pockets(2000, bed.sheet, bed.pillow, bed.pen, bed.glasses); // Pass bed's properties explicitly

console.log(pockets.pen);    // 3
console.log(bed.glasses);    // 1
// console.log(table.money);    // undefined (correct, as money is not on table's prototype chain)

// alert() is a browser-specific function; for Node.js or console, use console.log()
// If you're running this in a browser environment, the alerts will work as expected:
// alert(pockets.pen);
// alert(bed.glasses);
// alert(table.money);