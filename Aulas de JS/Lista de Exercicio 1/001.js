/*

1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Insira a primeira nota: ', (nota1) => {
  rl.question('Insira a segunda nota: ', (nota2) => {
    rl.question('Insira a terceira nota: ', (nota3) => {
      nota1 = parseFloat(nota1);
      nota2 = parseFloat(nota2);
      nota3 = parseFloat(nota3);

      const media = (nota1 + nota2 + nota3) / 3;
      let classificacao;

      if (media < 5) {
          classificacao = "Reprovação";
      } else if (media >= 5 && media <= 7) {
          classificacao = "Recuperação";
      } else {
          classificacao = "Passou de semestre";
      }

      console.log("Média: " + media);
      console.log("Classificação: " + classificacao);

      rl.close();
    });
  });
});