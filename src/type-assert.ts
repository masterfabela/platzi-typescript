let username: any;
username = 'luis';

// Tenemos una cadena, TS Confia en mi!
let message: string = (<string>username).length > 5 ?
  `Welcome ${username}`:
  'Username is too short'
console.log(message);

let usernameWithId: any = 'luixAviles 1';
// Como obtenemos username?
username = (<string>usernameWithId).substring(0, 10);
console.log(username);


// Sintaxis "as"
message = (username as string).length > 5 ?
  `Welcome ${username}`:
  'Username is too short'
console.log(message);

let helloUser: any;
helloUser = 'hello paparazzi';
let username2 = (helloUser as string).substring(6);
console.log(username2)
