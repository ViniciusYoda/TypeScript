let login: string = 'Employee'; // ou qualquer valor que queira testar

let message: string = (login === 'Employee') ? 'Hello' :
                      (login === 'Director') ? 'Greetings' :
                      (login === '') ? 'No login' :
                      '';

console.log(message);
