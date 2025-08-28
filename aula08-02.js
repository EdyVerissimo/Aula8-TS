"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var digite = readline;
var numerosLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeroEncontrar = digite.questionInt('Digite o numero que deseja encontrar: ');
var posicao = numerosLista.indexOf(numeroEncontrar);
if (posicao !== -1) {
    console.log("O numero ".concat(numeroEncontrar, " foi encontrado na posi\u00E7\u00E3o ").concat(posicao, " "));
}
else {
    console.log("O numero ".concat(numeroEncontrar, " n\u00E3o foi encontrado na lista"));
}
