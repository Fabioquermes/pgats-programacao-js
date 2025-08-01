/**
    Entregador de brinquedos para os dogs

    Dado que voce tenha uma lista de brinquedos e entregue um por vez.
    Crie um script que passe pela lista de brinquedos e entregue um por vez.
    Exiba o nome de cada brinquedo que for entregue.

    Use a estrutura de repetiçao forEach.

    Extra: trasnsforme a logica em uma funçao

 */

const brinquedos = [
    'Bola',
    'Osso',
    'Corda',
    'Sino'
]

                 //varivavel criada na hora
brinquedos.forEach(brinquedo => {
    console.log(brinquedo)
})

console.log(`Todos brinquedos foram entregues!`)

console.log(`-----------------------`)
// Exemplo Extra do colega:

function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo, i) => {
        console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
    });
}

entregarBrinquedos(brinquedos)