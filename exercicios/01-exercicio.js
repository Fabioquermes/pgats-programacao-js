/**
Gerador de tags de identificação
 
Crie um script para gerar a etiqueta (tag) de identificacao que sera presa na coleira de 
um cachorro no abrigo. O Dono ira informar nome, idade, peso, raça e se é adotado ou não.

A tag deve ter:
    O nome em letras maiusculas
    A raça com a primeira Letra Maiuscula 
    Peso

 */

const nome = "Paçoca", raca = "Pug"
let idade = 6, peso = 1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()
//let racaFirsletter = raca.replaceAll('v', 'V')

animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}]
console.log(animal)

const dogPacoca = {
    nome: "Pacoca",
    raca: "PUG",
    idade: 6,
    peso: 10.5,
    adotado: true
}
console.log(`Nome: ${ dogPacoca.nome.toUpperCase() } - Raça: ${dogPacoca.raca.slice(0, 1).toUpperCase() + 
    dogPacoca.raca.slice(1).toLowerCase() } - Peso: ${ dogPacoca.peso}`)

