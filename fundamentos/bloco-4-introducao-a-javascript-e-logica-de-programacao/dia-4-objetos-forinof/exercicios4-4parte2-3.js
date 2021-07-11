// EXERCÍCIO 03

// SOLUÇÃO 01

function indiceMenorValor(numbers){
    let menor = numbers[0];
    let indice = 0;
    for (let index = 1; index < numbers.length; index += 1){
        if (numbers[index] < menor) {
            menor = numbers[index]
            indice = index;
        }
    }
    return indice;
}
console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]))

// SOLUÇÃO 02

function indiceValorMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indice] < numeros[indiceMenor]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log(indiceValorMenor([2, 4, 6, 7, 10, 0, -3]));
