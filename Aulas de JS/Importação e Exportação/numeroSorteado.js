/*

Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1-100.
Faça um programa que recebe os 5 numeros sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:

    5
    50
    10
    28
    23

*/

const { gets, print } = require('./funcoesAuxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteados = numerosSorteados[i];
    if (numeroSorteados > maiorValor) {
        maiorValor = numeroSorteados;
    }
}

print(maiorValor);

/*

Forma simplificada do mesmo código:

const { gets, print } = require('./funcoesAuxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    if (numeroSorteados > maiorValor) {
        maiorValor = numeroSorteados;
    }
}

print(maiorValor);

*/