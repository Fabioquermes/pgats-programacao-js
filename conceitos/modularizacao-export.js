/**
 
Sintaxe CommonJS:
    mudule.exports = {} / require('') -> esse modelo deixou de ser utilizado! (ha bibliotecas mais antigas que utilizam desta sitaxe)

Sendo subistituido por:

ESM - Ecmascript Standard Modules -> nessa nova sintaxe se faz a importaçao utilizando apenas duas palavras chaves:
    export {} / import

*/

 //vimos que podemos implementaçao de um codigo simples para uma função:
 
 const brinquedos = [
    'Osso',
    'Peteca',
    'Chocalho'
 ]

 // const nomePet = `Ptoco`
 // console.log(`O nome do pet é $(nomePet)`)

 function exibirNomePet(nomePet) {
    console.log(`O nome do pet é ${nomePet}`)
 }

 exibirNomePet(`Paçoca`)
 exibirNomePet(`Pantera`)


// vamos exportar a função acima:

 export {
    exibirNomePet
}
 
 

