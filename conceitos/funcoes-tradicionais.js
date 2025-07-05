/**
    Funçoes em Javascript
 */

/*
//Funçoes tradicionais
    function saudacao(nome){
        return `Òla, $(nome)!`;
    }
    console.log(saudacao("Julio"))
    // Saida: Ola, Julio!

//Funcoes de seta
    const saudacao = (nome) => {
        `Olá, $(nome)!`;
    }
    console.log(saudacao)("Julio")
    // Saida: Olá, Julio!
*/

// funçao nomeada, com parametro, sem retorno
function exibirNomeDodog(nome){
    console.log(nome)
}

//funçao nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND'){
    console.log(porte)
}

// funçao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

//retornando objeto em uma funçao
function obterObjetoDog(){
    return{
        nome: 'Pacoca o Pug',
        peso: 11.5,
        dogIrmao: {
            nome: 'Filhote'
        },
        adotado: true
    }
}

//retorno uma lista de objeto em uma funçao
function listarObjetosDog(){
    return [{
        nome: 'Pacoca o Pug',
        peso: 11.5
    }, {
        nome: 'Pacoca o Pug',
        peso: 11.5
    }]
}

function listarNomesDeDogs(){
    return [
        'Pacoca',
        'Chico',
        'Pepa'
    ]
}

exibirNomeDodog("Pacoca")
exibirPorteDoDog()//se não passar nenhum parametro na chamada o valor como default será apresentado "ND"
console.log(obterNomeDoDogFormatado("Pacoca o pug"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())