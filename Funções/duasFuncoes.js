function escreverNome (nome){
    return(`Meu nome é ${nome}`);
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log(escreverNome('Vitor') + ', sou maior de idade');
    }
    else {
        console.log(escreverNome('Filipe') + ', sou menor de idade');
    }
}

verificarIdade(18);
verificarIdade(11);