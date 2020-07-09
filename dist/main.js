"use strict";
console.log('Hola platzi world');
// Number
// Explicito
var phone;
phone = 1;
phone = 342;
// phone = 'Hola' // Error
// Inferido
var phoneNumber = 234;
phoneNumber = 23;
// phoneNumber = true; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 10010;
// Tipo: Boolean
// Tipado Explicito
var isPro;
isPro = true;
isPro = false;
// isPro = 23
//Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 23; // Error
// String
var userName = 'luisAviles';
userName = 'Luis';
// userName = true; // Error
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + userName + "\n    firstName: " + (userName + ' Aviles') + "\n    phone: " + phoneNumber + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
