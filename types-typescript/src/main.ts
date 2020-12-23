console.log('Hola platzi world')

// Number
// Explicito

let phone: number;
phone = 1;
phone = 342;
// phone = 'Hola' // Error

// Inferido
let phoneNumber = 234;
phoneNumber = 23;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o23432

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
isPro = false;
// isPro = 23

//Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 23; // Error

// String
let userName: string = 'luisAviles';
userName = 'Luis';
// userName = true; // Error

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${userName}
    firstName: ${userName + ' Aviles'}
    phone: ${phoneNumber}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);