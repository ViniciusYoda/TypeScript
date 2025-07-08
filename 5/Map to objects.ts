type User2 = {
    name: string;
    surname: string;
    id: number;
};

type MappedUser = {
    fullName: string;
    id: number;
};

let john1: User2 = { name: "John", surname: "Smith", id: 1 };
let pete1: User2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1: User2 = { name: "Mary", surname: "Key", id: 3 };

let users1: User2[] = [john1, pete1, mary1];

let usersMapped: MappedUser[] = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

// Testes
alert(usersMapped[0].id);        // 1
alert(usersMapped[0].fullName);  // John Smith
