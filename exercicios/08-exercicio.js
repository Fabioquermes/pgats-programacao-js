/**

    Controle de petiscos

    Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.

    Use a estrutura de repetição for contado.

    Exiba:
        - Cada vez que um petisco for entregue
        - Quando o dog estiver satisfeito (que é quando terminar os petiscos)

    Extra: transforme a lógica em uma função (da forma que conseguir)
      
 */

// estoque de petiscos:
const quantidadePetiscosDisponiveis = 4

//.  CONTADOR                      CONDICAO                     MANIPULADOR 
for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++) {
    console.log(`Dando o petisco de n ${petisco} para o Totó`)
}

console.log(`Satisfaito, chega de petiscos por hoje`)

// Exemplo  - Extra

const alimentarDog = (quantidadePetiscos) => {
    for (let i = 1; i <= quantidadePetiscos; i++) {
        console.log(i < quantidadePetiscos ? `Ganhei ${i} petisco. Quero mais!` : `Depois do ${i} petisco, estou satisfeito!`);
    }
}
alimentarDog(4)