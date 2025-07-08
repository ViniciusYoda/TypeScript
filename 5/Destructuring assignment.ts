type User4 = {
    name: string;
    years: number;
    isAdmin?: boolean;
};

let user3: User4 = {
    name: "John",
    years: 30
};

// Desestruturação com renomeação e valor padrão
let { name: user4Name, years: age, isAdmin = false } = user3;

alert(user4Name);     // John
alert(age);           // 30
alert(isAdmin);       // false
