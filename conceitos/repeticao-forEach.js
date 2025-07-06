/**

 listaDeAlunos
    Matheus
    Renata
    Leandro
    Ana
    Lucas

    paraCada (item da) listaDeAlunos
        // dar uma nota aleatória

 */

   const listaDeAluno = [
    'Matheus',
    'Renata',
    'Leadro',
    'Ana',
    'Lucas'
   ]

   listaDeAluno.forEach(aluno => {
     console.log(aluno)
   })

   const listaDeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 7
   },
       {
        nome: 'Renata',
        nota: 7
   },
       {
        nome: 'Leadro',
        nota: 7
   },
       {
        nome: 'Ana',
        nota: 9
   },    {
        nome: 'Lucas',
        nota: notaDoLucas()
   }
 
]

function notaDoLucas () {
    return 1
}

console.log(`--------------------------`)

listaDeAlunosENotas.forEach(aluno => {

    if (aluno.nota < 7){
      console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
//    console.log(`O aluno ${aluno.nome} tem a nota ${aluno}`)

    }
  
})