function somaDoisValores (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDoisValores (valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSoamaDoisValores = somaDoisValores(valor1, valor2);
    // 2. Divide pela quantidade de valores passados
    const resultadoMediaDoisValores = resultadoSoamaDoisValores /2;
    // 3. Retornar o resultado da media 
    return resultadoMediaDoisValores;
}


module.exports = {
    somaDoisValores
}