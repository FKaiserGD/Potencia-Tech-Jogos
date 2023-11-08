/*

Crie uma classe para representar pessoa.
Para cada pessoa teremos os atributos nome, peso e altura.
As pesssoas devem ter a capcidade de dizer o valor do seu IMC 
instância uma pessoa chamada José que tenha peso de 70kg e 1,75 de altura, peça ao José para dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso/(this.altura*this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
           return ("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            return ("Peso saudável")
        } else if (imc >= 25 && imc < 30) {
            return ("Sobrepeso")
        } else if (imc >= 30 && imc < 40) {
            return ("Obeso")
        } else {
            console.log("Muito obeso (Obeso mórbido)")
        }

    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());
const renan = new Pessoa('Renan', 73, 1.75);
console.log(renan.classificarImc());