const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Algoritmo 2: Cálculo de IMC e Condição
rl.question('Insira o peso em quilogramas: ', (peso) => {
  rl.question('Insira a altura em metros (Ex: 1.80): ', (altura) => {
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    const imc = peso / (altura * altura);
    let condicao;

    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        condicao = "Peso saudável";
    } else if (imc >= 25 && imc < 30) {
        condicao = "Sobrepeso";
    } else if (imc >= 30 && imc < 40) {
        condicao = "Obeso";
    } else {
        condicao = "Muito obeso (Obeso mórbido)";
    }

    console.log("IMC: " + imc);
    console.log("Condição: " + condicao);

    rl.close();
  });
});
