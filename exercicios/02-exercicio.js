/**
 Validador de nomes para as tags
 
 Alguns donos estao registrando os dogs com nomes
 mal formatados. Crie um script para limpar e
 padronizar os nomes.
 
 Aplique as formatacoes e exiba?
  - O nome original, como foi cadastrado
  - O nome formatado
 
 Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra.
 Exiba se o nome e valido ou nao.
 */

 const nomeDog = "pa  Co@!%c   a"

 let nomeFormatado = removerCaracteresEspeciais(nomeDog)
// nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.length).toLowerCase()
// nomeFormatado = capitalizarPalavra(nomeFormatado)
    nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
    nomeFormatado = tornaAPrimeiraLetraMaiuscula(nomeFormatado)

// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length ===1;


//  const valido = nomeFormatado.split(" ").length ===1
//  ou em uma função:
    const valido = verificarSeONomeEValido(nomeFormatado)


 console.log(nomeDog)
 console.log(nomeFormatado)
 console.log(valido)

 function removerCaracteresEspeciais(nome) {
  //  return nome.replace(/[^a-zA-ZÀ]/g, "");
    return nome.replace(/[^a-zA-ZÀ/s]/g, ""); //solucao do chat Gpt remover espacos em branco em uma string
 }

 function removerEspacosEntreAPalavra(nome){
    return nome.replace(/\s+/g, "")
 }

 function tornaAPrimeiraLetraMaiuscula(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
 }

 function verificarSeONomeEValido(nome){
    return nome.split(" ").length ===1
 }

 /**
  PRIMEIRA EXPLICAçÃO:
  ==   - compara valores (coesao de tipo)
    exemplo: 1 == '1' => true
    
  ===  - estritamente igual

   SEGUNDA EXPLICAÇÃO:

    operadores = comparacao , logica, aritmetica

        VALOR A maior que VALOR B
        VALOR A menot que VALOR B

        == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B
        === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dados que' VARIAVEL B

  */
