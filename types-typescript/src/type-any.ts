// Tipo Explicito
let idUser: any;
idUser = 1; // Number
idUser = '1'; // string
console.log('iduser', idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('otherId', otherId);


let surprise: any = 'hello typescript';
//
const res = surprise.substring(6); // Error
console.log('res',res);
