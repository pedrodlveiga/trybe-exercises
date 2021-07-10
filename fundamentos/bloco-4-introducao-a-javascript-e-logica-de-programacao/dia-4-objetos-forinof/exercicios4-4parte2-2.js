// EXERCÍCIO 02

// SOLUÇÃO 01

function indiceMaiorValor(numbers){
    let maior = numbers[0];
    let indice = 0;
    for (let index = 1; index < numbers.length; index += 1){
        if (numbers[index] > maior) {
            maior = numbers[index]
            indice = index;
        }
    }
    return indice;
}
console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]))

// SOLUÇÃO 02

function indiceValorMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indice] > numeros[indiceMaior]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}
console.log(indiceValorMaior([2, 3, 6, 7, 10, 1]));
