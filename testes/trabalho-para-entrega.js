// Exporta as funções (ESM)
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};

// 1. Gera tag de identificação em maiúsculas (sem return)
const geradorDeTagsDeIdentificacao = nome => nome.toUpperCase();

// 2. Verifica se pode ser adotado: idade = 1 e porte = 'M' (sem return)
const verificarSePodeSerAdotado = (idade, porte) => idade === 1 && porte === 'M';

// 3. Calcula consumo de ração: peso * 300 (sem return)
const calcularConsumoDeRacao = (nome, idade, peso) => peso * 300;

// 4. Decide tipo de atividade por porte (sem return)
const decidirTipoDeAtividadePorPorte = porte => 
  (porte === 'pequeno' && 'brincar dentro de casa') || '';

// 5. Busca dado de forma assíncrona (sem return)
const buscarDadoAsync = async () => new Promise(resolve => setTimeout(() => resolve('Pipoca'), 10));


