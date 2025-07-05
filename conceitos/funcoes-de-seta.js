/*
    Funçoes em Javascript
 
    Funcoes de seta

    const saudacao = (nome) => {
        `Olá, $(nome)!`;
    }
    console.log(saudacao)("Julio")
    // Saida: Olá, Julio!
*/

// funçao nomeada, com parametro, sem retorno
const exibirNomeDodog = (nome) => {
    console.log(nome)
}

//funçao nomeada, com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

// funçao nomeada, com parametro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

//retornando objeto em uma funçao
const obterObjetoDog = () => {
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
const listarObjetosDog = () => {
    return [{
        nome: 'Pacoca o Pug',
        peso: 11.5
    }, {
        nome: 'Pacoca o Pug',
        peso: 11.5
    }]
}

const listarNomesDeDogs = () => {
    return [
        'Pacoca',
        'Chico',
        'Pepa'
    ]
}

// arrow fanction sem bloco + com return 'automatico'
const dobrar = (numero) => numero * 2

exibirNomeDodog("Pacoca")
exibirPorteDoDog()//se não passar nenhum parametro na chamada o valor como default será apresentado "ND"
console.log(obterNomeDoDogFormatado("Pacoca o pug"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`----------------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()