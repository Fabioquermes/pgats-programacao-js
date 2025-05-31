/**
    
    -- decremento
    ++ incremento

    ? ternario

 */
//incremento
let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

//decremento
let pesodoTutor = 100
console.log(pesodoTutor)

pesodoTutor--
console.log(pesodoTutor)

// ternario
// a condição que se verdadeira ira executar a ação
// <condicao> ? <acao se verdadeira> : <acao se falso>

//const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio'
//            <condicao>         se          senao     

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
              ? 'pequeno'
              :pesoDoDogOperadorTernario <= 20 //senao se / if
              ? 'médio'
              : 'grande' // senao  

console.log(porte)
{/*<condicao> ? <acao se verdadeira> : <acao se falso></acao>*/}

