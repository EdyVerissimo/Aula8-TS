import * as readline from 'readline-sync';
const digite = readline;
const numeros = new Set<number>();

console.log(`digite 10 numeros (numeros iguals não são armazenados): `);
for (let contador=0; contador < 10; contador ++ ) {
    const numero = digite.questionInt(`digte o  numero ${contador +1} : `)
    numeros.add(numero);

}
console.log(`\nNumeros Armazenados`);
for (const numero of numeros) {
    console.log(numero);
}