"use strict";
// Type: object
var user;
user = {}; // Object
user = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs Tipo TS)
var myObject = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
var isInstance = myObject instanceof Object; //Clase Object JS
console.log('isInstance', isInstance);
console.log('ures.userName', myObject.userName);
