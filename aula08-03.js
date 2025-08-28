"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var digite = readline;
var numeros = new Set();
console.log("digite 10 numeros (numeros iguals n\u00E3o s\u00E3o armazenados): ");
for (var contador = 0; contador < 10; contador++) {
    var numero = digite.questionInt("digte o ".concat(contador, " numero :"));
    numeros.add(numero);
}
console.log("\nNumeros Armazenados");
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    console.log(numero);
}
