/**
    + adição
    - subtração
    * multiplicação
    / divisão
    % resto
    ** exponencial
 */

    console.log(1 + 1)  // 2
    console.log(10 - 7) // 3
    console.log(2 * 2)  // 4

    console.log(11 / 2)
    console.log(11 % 2)

    console.log(4 ** 4)

    console.log( 1 + 1 * 2) // precedencia

    // Parse
    console.log(11 / 2) // 5.5
    console.log(parseInt(11 / 2)) // 5

    //Arredondamento
    Math.floor // arredonda o valor para baixo
    console.log(Math.floor(5.8))

    Math.round // arredonda o valor mais proximo
    console.log(Math.round(5.8))
    console.log(Math.round(5.4))
    console.log(Math.round(5.5))
    
    //manipular quantidade de casas decimais
    const valorDecimal = 2.123123
    console.log(valorDecimal.toFixed(3)) //ira o numero menos 3 casas decimais
    



