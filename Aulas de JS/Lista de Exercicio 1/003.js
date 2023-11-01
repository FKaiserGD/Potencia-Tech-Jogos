/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Algoritmo 3: Cálculo de Pagamento
rl.question('Insira o preço de etiqueta em reais: ', (precoEtiqueta) => {
  precoEtiqueta = parseFloat(precoEtiqueta);

  console.log("Tabela de Preços:");
  console.log("1 - À vista Débito - 10% de desconto");
  console.log("2 - À vista no Dinheiro ou PIX - 15% de desconto");
  console.log("3 - Em duas vezes - Preço normal de etiqueta sem juros");
  console.log("4 - Acima de duas vezes - Preço normal de etiqueta mais juros de 10%");

  rl.question('Insira o código de pagamento (1 a 4): ', (codigoPagamento) => {
    codigoPagamento = parseInt(codigoPagamento);

    let precoFinal;

    switch (codigoPagamento) {
      case 1:
          precoFinal = precoEtiqueta * 0.9;
          console.log("À vista Débito - 10% de desconto");
          break;
      case 2:
          precoFinal = precoEtiqueta * 0.85;
          console.log("À vista no Dinheiro ou PIX - 15% de desconto");
          break;
      case 3:
          precoFinal = precoEtiqueta;
          console.log("Em duas vezes - Preço normal de etiqueta sem juros");
          break;
      case 4:
          precoFinal = precoEtiqueta * 1.1;
          console.log("Acima de duas vezes - Preço normal de etiqueta mais juros de 10%");
          break;
      default:
          console.log("Código de pagamento inválido.");
          break;
    }

    console.log("Preço final a pagar: R$" + precoFinal);

    rl.close();
  });
});