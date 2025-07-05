/**
 
Plano de atividade para o Pat

Crie um script que defina o plano de atividade para os dogs durante a estadia. O script vai
receber o porte (pequeno, medio ou grande): e o tempo disponivel representado em minutos.exemplo

Paçoca - Medio - 45

Use uma condicional para decidir o tipo a atevidade com base no porte:
-   pequeno -> brincar dentro de casa
-   médio -> caminhar no quarteirão
-   grande -> correr no porque
-   qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo:
-   meno que 15 -> "atividade rapida: [atividade]"
-   de 15 a 30 -> "tempo ideal: [atividade]"
-   acima de 30 -> "hora da diversão: [atividade]" 

 */


const nome = `Pantera`
const porte = `médio`
const tempo = 0

// decidir o tipo a atevidade com base no porte:
let atividade

switch (porte) {
  case 'pequeno':
    atividade = `brincar dentro de casa`
    break
  case 'médio':
    atividade = `caminhar no quarteirão`
    break
  case 'grande':
    atividade = `correr no porque`
    break
  default:
    atividade = `porte inválido`
}

// ajustar a mensagem de acordo com o tempo:
let mensagem

if (tempo < 15) {
    mensagem = `atividade rapida`
} else if (tempo <= 30) {
    mensagem = `tempo ideal`
} else if (tempo > 30) {
    mensagem = `hora da diversão`
}

console.log(`${ mensagem }: [${ atividade }]`)