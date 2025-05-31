/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas.
 * Calcule a quantidade diaria de ração com base na 
 * seguinte formula: 
 * 
 * Gramas por dia = peso x 30
 * 
 * Exiba:
 *  - Nome do dog
 *  - Peso
 *  - Quantidade de ração recomendada por dia
 *  - Quantos dias o estoque atual vai durar
 */

// ALTERNATIVA 1, simplificado sem função
const nome = 'Pacoca'
const peso = 20
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`nome do dog: ${ nome }`)
console.log(`Peso: ${ peso }`)
console.log(`Grama por Dia: ${ gramasPorDia }`)
console.log(`Duração do Estoque: ${ duracaoEstoque }`)

// ALTERNATIVA 2, usando função com parametro

function calcularConsumoDeRacao (nome, peso, estoque){
    const gramasPorDia = peso * 30
    const duracaoEstoque = estoque / gramasPorDia

    console.log(`------------------------------------------`)
    console.log(`nome do dog: ${ nome }`)
    console.log(`Peso: ${ peso }`)
    console.log(`Grama por Dia: ${ gramasPorDia }`)
    console.log(`Duração do Estoque: ${ duracaoEstoque }`)
    console.log(`------------------------------------------`)
    
}

    calcularConsumoDeRacao('Pacoca', 1, 2000)




