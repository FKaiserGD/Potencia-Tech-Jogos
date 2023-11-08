/*

Faça um programa para calcular o valor de uma viagem

Voê terá 3 variáveis, Sendo elas:

    1- Preço do combustivel;
    2- Gasto médio do combustível do carro por Km;
    3- Distância em Km da viagem;

*/

const precoCombustivel = 5.79;
const gastoMedio = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / gastoMedio;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));