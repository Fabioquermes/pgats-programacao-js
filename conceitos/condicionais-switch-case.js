/**
    Exmplo:
        se (condicao)
            faca x
        senao se
            faca y
        senao se
            facao z

    escolha (condicao):
        caso x: faca
        caso y: faca
        caso z: faca
    
    No lucar das condições acima, no java script utiliza o swtch-case:
    Porque o break = Para que a execução seja interronpida quando a condiçao é atendida. 
 */
    const peso = 10

    switch (peso){
        case 10:
          console.log('P')
          break
        case 20:
          console.log('M')
          break
        case 30:
          console.log('G')
          break
        default:
          console.log('ND')
        
    }

