const digite = require('readline-sync');

const cores: string [] = [];

console.log('digite 5 cores: ')
for (let contador = 0; contador < 5; contador += 1) {
    const  cor = digite.question(`cor ${contador + 1} : `);

    cores.push(cor);
    }
console.log(`\nCores armazenadas: `);
for ( const cor of cores) {
    console.log(cor);
    } 
cores.sort();
console.log(`\nCores em ordem alfabética: `);
for (const cor of cores) {
    console.log(cor);
    }
console.log(`\nCores em ordem alfabética inversa: `);
cores.reverse();
for(const cor of cores) {
    console.log(cor);
    }
    console.log(`fim do programa`);
    