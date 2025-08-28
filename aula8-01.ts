
import readline = require("readline-sync");

const cores: string[] = [];

console.log("Por favor, digite 5 cores:");
for (let i = 0; i < 5; i++) {

    const corDigitada = readline.question(`Digite a ${i + 1}a cor: `);
    
    
    cores.push(corDigitada);
}

console.log("\nSuas cores:");
for (const cor of cores) {
    console.log(cor);
}

cores.sort();

console.log("\nSuas cores em ordem alfabética:");
for (const cor of cores) {
    console.log(cor);
}