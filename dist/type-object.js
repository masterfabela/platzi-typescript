"use strict";
// Type: object
let user;
user = {}; // Object
user = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs Tipo TS)
const myObject = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObject instanceof Object; //Clase Object JS
console.log('isInstance', isInstance);
console.log('ures.userName', myObject.userName);
