type User = {
  name?: string;
  surname?: string;
};

let user: User = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
