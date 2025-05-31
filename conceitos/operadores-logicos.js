/**
    &&  - E / AND
    ||  - OU / OR
    !   - NÃO / NOT
 */

    // && - E / AND
    console.log(true && true) //true
//Exemplo:
    const nomeDog = "Paçoca"
    const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
    const nomePossuiAteDezCaracteres = nomeDog.length <= 10

    console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // True

    // || - OU / OR
    const dog = {
        adotado: false,
        peso:5.3
    }

    console.log(true || true) //verdadeiro
    console.log(true || false) //verdadeiro
    console.log(false || true) //verdadeiro
    console.log(false || false) //falso

    //se o dog NÃO(!) for adotado ||(ou) peso for MENOR(<) que 10
    //uma das condiçoes devem ser verdadeiras para retornar verdadeira.
    console.log(dog.adotado || dog.peso < 10) // verdadeiro
