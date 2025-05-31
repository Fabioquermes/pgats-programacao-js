/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */

// const - para informaçoes que nunca mudam
// var ou let - para informaçoes que podem mudar

//informacao que nao mudam
const nome = 'Pacoca'
const raca = 'Pug'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '12/05/2019'
const porte = 'P'

// informacoes que mudam
let idade = 6
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'P'


//hoisting -> inçamento ou elevação

const irmaos = [
    {
        nome: "Thor",
        idade: 2
    },
    {
        nome: "Hela",
        idade: 3
    }
]
console.table(irmaos)

/** Em logica - Portugol:
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
  
 Em javaScript:
 * String - cadeia
 * Number - inteiro/real
 * Boolean - logico
 * Array - vetor/matriz
 * 
 * undefined (quando nao e atribuido valor nenhum a variavel)
 * null (quando atrir para a variavel o valor nulo)
 * 
 * BigInt - Number para numeros  extremamente grandes
 * Symbol - 'identificador unico'
 * 
 */


/*Exercicio
const valor = "42" // a variavel ira receber uma string por conta das aspas
console.log(valor)
*/

/**
 * Como pode ser declarado uma String:
 com aspas simples ou single quate (' ')
 com aspas dublas ou duble quate("  ")
 com crace ou templete string (` `)
 */

 //exemplos 01 = concatenacao

 const turma = "02"
 let data = "05 de Abril"

 console.log("Aula 03 da Turma " + turma + " no Sabado dia 05 de Abril")

//exemplos 02 = interpolacao de string

console.log(`Aula 03 da Turma ${ turma } no Sabado dia ${data}`)


// * Metodos auxiliares para se trabalhar com Strings:

// .length = Para verificar quantos caracteres ha em uma string

console.log(data.length)

// split - separar a string em uma lista de palavras

const nomesDeAlunos = "Giuliana Andre Goku Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunos)
console.log(nomesDeAlunosSplit)

//.toLowerCase() - Passa a string para forma minuscula
//.toUpperCase() - Passa a string para forma Maiuscula

console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

//.includes('P') - Funcao da string que retorna um Boolean (pesquisa em uma string se determinado nome existe retornando Verdade ou Falso)

console.log(nomesDeAlunos.includes("Goku"))
console.log(nomesDeAlunos.includes("Giovana"))

//obs - Chai - biblioteca de asserções (para ver se o teste passou ou não)


//.replaceAll('a', 'i') - realizar uma substituicao em uma string

console.log(nomesDeAlunos.replaceAll('a', 'i'))

//.trim() - retirar espaços desnecessarios no inicio e no final de uma string

const conceitosLogica = "       inteiro real             "

console.log(conceitosLogica.trim())

//Slic ou Substring - serve para fazer um recorte em uma string. Insto e captura o caracter de uma 
// string segundo sua posição tomando como base um Vetor

let dataParaCortar = "05 de Abril"
const cpf = "86189924611"

console.log(dataParaCortar.slice(0, 2))
console.log(cpf.slice(0, 3))


//substring - funciona parecido com o slice, 