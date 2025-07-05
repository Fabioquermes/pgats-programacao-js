/**
Condicionais em Javascript
    1. if, else, else if / Se, Entao, Senao
    2. switch, case / Escolha


    condicao (se verdadeira)
        acao dentro do if
    senao
        acao dentro do else


        Traduzindo para codigo:
 */

    const idade = 1
    const porte = 'P'

    if(10 > 5){
        console.log(`valor é maior`)    
    }else {
        console.log(`valor é menor`)
    }    

if (idade >= 2) {
  console.log(`Pode ser adotado, pela idade`)
} else if (porte === 'P'){
  console.log(`Pode ser adotado, pelo porte`)
} else {
  console.log(`Não pode ser adotado`)
}

