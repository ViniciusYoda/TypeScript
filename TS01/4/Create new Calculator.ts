class Calculator2 {
    private a: number = 0;
    private b: number = 0;

    read(): void {
        const aInput = prompt('a?', '0');
        const bInput = prompt('b?', '0');
        this.a = Number(aInput) || 0;
        this.b = Number(bInput) || 0;
    }

    sum(): number {
        return this.a + this.b;
    }

    mul(): number {
        return this.a * this.b;
    }
}

const calculator2 = new Calculator2();
calculator2.read();

console.log("Sum=" + calculator2.sum());
console.log("Mul=" + calculator2.mul());
