"use strict";
// Explicita
let nullVariable;
let otherVariable = null;
otherVariable = 'test';
console.log('otherVariable', otherVariable);
// Undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
let otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null y Undefined como subtipos
// --strictNullChecks
let albumName;
