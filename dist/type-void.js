"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
// Tipo Inferido
function showFormatedInfo(user) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstName}
    `);
}
showFormatedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
// tipo void como tipo de dato en variable
let unusable;
// unusable = null; // Error con modo estricto de datos
unusable = undefined;
// Tipo Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
// ciclo infinito
