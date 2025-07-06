/**
 
  Contador de satisfaçao de passeio

  Crie um script que salve quando o Dog já passeou o suficiente. Para saber, vamos considerar que ele se sentirá satisfeito.

  Use a estrutura de repetição while.

  Exiba:
  Qual o numero da volta atual
  Quanto o dog estiver satisfeito

  Extra: transforme a logica em uma função (da forma que conseguir)

 */

  let voltasParaDogFicarSatisfeito = 5
  let volta = 1

  while(volta <= voltasParaDogFicarSatisfeito){
    console.log(`Volta de n ${volta} com o Paçoca`)

    volta++
  }

  console.log(`Acabou o passeio, Paçoca!`)

// usando função:
  console.log(`--------------------------------`)  
  function acabouPasseioDoPacoca() {
    
     let voltasParaDogFicarSatisfeito = 5
     let volta = 1

     while (volta <= voltasParaDogFicarSatisfeito) {
       
        console.log(`Volta de n ${volta} com o Paçoca`)
        console.log(`Paçoca ainda não está satisfeito`)

        volta++
    }

    console.log(`Acabou o passeio, Paçoca!`) 

}

acabouPasseioDoPacoca()
