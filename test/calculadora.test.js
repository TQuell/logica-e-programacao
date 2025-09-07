//posso relacionar os arquivos e pastas 

const {somaDoisValores} = require ('../src/calculadora');
const {expect} = require ('chai');
//isso aqui está importando (requerir) as funções que estão escritas no calculadora.js

// >> const resultadoDaSoma = somaDoisValores(-10, 3);

// >> console.log(resultadoDaSoma); 

describe('Testes da função de soma', function () {
     it('a função deve ser capaz de somar dois números positivos', function(){
        //coleta o resultado da função
        const resultadoDaSoma = somaDoisValores (3, 5);

        //compara o resultado com o valor que você esperava
        expect(resultadoDaSoma).to.equal(8);
     });

     it('a função deve ser capaz de somar um número positivo e um negativo', function(){
        //coleta o resultado da função
        const resultadoDaSoma = somaDoisValores (50, -15);

        //compara o resultado com o valor que você esperava
        expect(resultadoDaSoma).to.equal(35);
     });
});


