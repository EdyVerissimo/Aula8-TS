import *as readline from 'readline-sync';
const digite = readline;

const numeros = new Set<number>([1,2,3,4,5,6,7,8,9,10]);

const numeroEncontrados= digite.questionInt("\ndigite o numero a ser encontrado: ");
// o .has faz a mesma função do includes no array
if (numeros.has(numeroEncontrados)) {
    console.log(`\nO numero ${numeroEncontrados} foi encontrado`);
} else {
    console.log(`\nO numero ${numeroEncontrados} não foi encontrado`);
}
