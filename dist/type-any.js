"use strict";
// Tipo Explicito
var idUser;
idUser = 1; // Number
idUser = '1'; // string
console.log('iduser', idUser);
// Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('otherId', otherId);
var surprise = 'hello typescript';
//
var res = surprise.substring(6); // Error
console.log('res', res);
