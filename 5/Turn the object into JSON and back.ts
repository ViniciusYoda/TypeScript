let user4 = {
  name: "John Smith",
  age: 35
};

let user5 = JSON.parse(JSON.stringify(user));

user5.name = "Mary"; 
alert(user4.name);  // John Smith — original permanece intacto
alert(user5.name); // Mary — cópia alterada
