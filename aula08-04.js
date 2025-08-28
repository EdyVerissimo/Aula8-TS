"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var digite = readline;
var numeros = new Set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var numeroEncontrados = digite.questionInt("\ndigite o numero a ser encontrado: ");
// o .has faz a mesma função do includes no array
if (numeros.has(numeroEncontrados)) {
    console.log("\nO numero ".concat(numeroEncontrados, " foi encontrado"));
}
else {
    console.log("\nO numero ".concat(numeroEncontrados, " n\u00E3o foi encontrado"));
}
