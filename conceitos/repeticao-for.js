/**
    para, faça
      contador; condição; manipulação do contador (incremento/decremento)

    quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++

 */

   const quantidadeCalculada = 3 

   for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
     // ação de dar um petisco
     console.log(`Dando o petisco de n ${quantidadeDePetiscos}`)

   }  

   const gatos = ['Lessie', 'Pony', 'Fumaca']

   for (let indice = 0; indice < gatos.length; indice++) {
     console.log(`Dando o Petisco para ${gatos[indice]} `)
   }

// repetido a açao de dar petisco tres vezes, isto é cada gata receberá 3 petiscos:
    for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
     // ação de dar um petisco

     for (let indice = 0; indice < gatos.length; indice++) {
     console.log(`Dando o Petisco para ${gatos[indice]} `)
   }
     console.log(`Dando o petisco de n ${quantidadeDePetiscos}`)

   } 