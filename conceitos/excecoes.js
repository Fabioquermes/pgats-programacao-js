/**
 
  tentar {
    // conexao com banco (exemplo)
  } pegar (erro/excecao) {
    // Salvar a excecao em algum lugar...
    // exibir
  }
  
  lançar = throw (lançar um erro)

 */


  try {
    console.log(`Tentando alimentar o Pet...`)
    // throw new Error('pet nao quiz alimento')

    // TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
  } catch (excecao) {
    // TRATAR ESTE ERRO - EXIBIR, SALVAR, MELHORAR A DESCRIÇAO DESSE ERRO
    console.log(excecao)
    console.log(excecao.nome)
    console.log(excecao.message)

    // CAPTURAR A EXECECAO
  
  }finally {
    // SEMPRE EXECUTAR, COM SE FOSSE UMA AÇAO FINAL
    console.log(`SEMPRE SEREI EXECUTADO`)

    // FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
  }

