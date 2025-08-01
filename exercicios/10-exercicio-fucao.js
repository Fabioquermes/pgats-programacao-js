
/**
    Distribuidor de petiscos

    Voce tem uma lista de caes: Pantera, Luna e Thor
    Crie um script que "entregue" 1 petisco para cada cao da lista.
    Exiba uma mensagem como: "Entregando petisco para Pantera"

    Mantenha os dados e a funçao em arquivos separados: use modularizaçao para organizar.
*/

import { CATS, DOGS } from './10-exercicio-dados.js'


function entregarPetiscos(listaDeDogs) {
    listaDeDogs.forEach(dog => {
        console.log(`Entregando petisco para ${dog}`)
    })
}

export {
    entregarPetiscos
}

//entregarPetiscos(DOGS)
//entregarPetiscos(CATS)