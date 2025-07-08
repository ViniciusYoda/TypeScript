function askPassword(ok: () => void, fail: () => void): void {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user6 = {
  name: 'John',

  loginOk(): void {
    alert(`${this.name} logged in`);
  },

  loginFail(): void {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user6.loginOk.bind(user6), user6.loginFail.bind(user6));
