/*

Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    medioKm;

    constructor (marca, cor, medioKm) {
        this.marca = marca;
        this.cor = cor;
        this.medioKm = medioKm;
    }

    gastoPercurso(distancia, precoCombustivel) {
        return distancia * this.medioKm * precoCombustivel;
    }

}

const uno = new Carro('Fiat','Vermelho',1/12);
console.log(uno.gastoPercurso(70,5));
const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.gastoPercurso(70,5));