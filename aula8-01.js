"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var cores = [];
console.log("Por favor, digite 5 cores:");
for (var i = 0; i < 5; i++) {
    var corDigitada = readline.question("Digite a ".concat(i + 1, "a cor: "));
    cores.push(corDigitada);
}
console.log("\nSuas cores:");
for (var _i = 0, cores_1 = cores; _i < cores_1.length; _i++) {
    var cor = cores_1[_i];
    console.log(cor);
}
cores.sort();
console.log("\nSuas cores em ordem alfabética:");
for (var _a = 0, cores_2 = cores; _a < cores_2.length; _a++) {
    var cor = cores_2[_a];
    console.log(cor);
}
