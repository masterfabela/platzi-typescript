// Explicita
let nullVariable: null;


let otherVariable = null;
otherVariable = 'test';

console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);


// Null y Undefined como subtipos

// --strictNullChecks
let albumName: string;
