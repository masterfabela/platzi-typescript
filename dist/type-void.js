"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
// Tipo Inferido
function showFormatedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstname: " + user.firstName + "\n    ");
}
showFormatedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
// tipo void como tipo de dato en variable
var unusable;
// unusable = null; // Error con modo estricto de datos
unusable = undefined;
// Tipo Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
// ciclo infinito
