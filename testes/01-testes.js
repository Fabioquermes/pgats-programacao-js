/**

    describe -> agrupador de testes
    it       -> implementação do teste

    TDD
        crio o teste
        vejo o teste falhar
        crio a implementação para o teste passar
        rodo o teste denovo
        refatoro o codigo para melhorar...

    ASSERTION / ASSERRÇÃO
        verificar se um comportamento está de acordo com o esperado

 */

    import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
    import assert from 'node:assert'

    // sitaxe padrão usando o Mocha:
    describe('Testes do Projeto', () => {
        it(`deve exibir o nome do dog com letras maiúsculas`, () => {
            assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')

            //verificar se: <valor atual> É IGUAL A <valor esperado>
        })


        it('primeiro teste', () => {

        })

        it('segundo teste', () => {

        })
    })
