import *as readline from 'readline-sync';
const digite = readline;

const numerosLista: number[] = [1,2,3,4,5,6,7,8,9,10];

const numeroEncontrar = digite.questionInt('Digite o numero que deseja encontrar: ');

const posicao = numerosLista.indexOf(numeroEncontrar);

if (posicao !== -1) {
    console.log(`O numero ${numeroEncontrar} foi encontrado na posição ${posicao} da lista `)
}
else {
    console.log(`\nO numero ${numeroEncontrar} não foi encontrado na lista`)
}