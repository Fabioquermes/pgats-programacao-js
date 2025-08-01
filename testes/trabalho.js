// Exporta as funções (ESM)
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};


// 1. Gera tag de identificação em maiúsculas
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// 2. Verifica se pode ser adotado: idade = 1 e porte = 'M'
function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

// 3. Calcula consumo de ração: peso * 300
function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// 4. Decide tipo de atividade por porte
function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  // Adicione outros portes se necessário
  return '';
}

// 5. Busca dado de forma assíncrona
async function buscarDadoAsync() {
  // Simula busca assíncrona e retorna 'Pipoca'
  return new Promise(resolve => setTimeout(() => resolve('Pipoca'), 10));
}

