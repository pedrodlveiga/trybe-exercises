// EXERCÍCIO 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index +=1){
console.log(numbers[index]);
}
//EXERCÍCIO 02

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i = 0; i < numbers.length; i +=1){
    soma += numbers[i];
    }
console.log(soma);
//EXERCÍCIO 03

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
for(let i = 0; i < numbers.length; i +=1){
    sum += numbers[i];
    media = sum / numbers.length;
    }
console.log(media);
// EXERCÍCIO 04

for(let i = 0; i < numbers.length; i +=1){
    sum += numbers[i];
    media = sum / numbers.length;
    console.log(media);
}
if (media > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
//EXERCÍCIO 05

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0]; // o maiorValor inicia como o primeiro elemento
for (let j = 1; j < numbers.length; j += 1){
//           ^--- começa no segundo porque o primero já foi considerado.
    if(numbers[j] > maiorValor){
        maiorValor = numbers[j]; // atualiza o maiorValor;
    }
}
console.log(maiorValor);
//EXERCÍCIO 06

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let y = 0; y < numbers.length; y += 1){
    if(numbers[y] % 2 !== 0){
        resultado +=1;
    }
}
if(resultado === 0){
    console.log("nenhum valor ímpar encontrado.")
} else {
  console.log(resultado)
}
//EXERCÍCIO 07

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}
console.log(menorValor);

//EXERCÍCIO 08
 let contagem;
 for(let indice = 1; indice <= 25; indice += 1){
     contagem = [indice];
     console.log(contagem);

 } 

 // OU

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}
console.log(numeros);
// EXERCÍCIO 09

numeros = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17,  18, 19, 20, 21, 22, 23, 24, 25];
let divisao;
for (let index = 0; index < numeros.length; index += 1) {
  divisao = numeros[index] / 2;
  console.log(divisao);
}





















   













