"use strict";
// Explicita
var nullVariable;
var otherVariable = null;
otherVariable = 'test';
console.log('otherVariable', otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
var otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null y Undefined como subtipos
// --strictNullChecks
var albumName;
