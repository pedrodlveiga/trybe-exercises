
// Exerício 01

let a = 17;
let b = 5;

soma = a + b;
console.log(soma)

subtracao = a - b;
console.log(subtracao)

multiplicacao = a * b;
console.log(a * b);

divisao = a / b;
console.log(divisao);

modulo = a % b; // retorna como resultado o resto da divisão.
console.log(modulo)

//Exercício 02

let num1 = 11;
let num2 = 18;

if (num1 < num2){
    console.log('O maior número é o ' + num2);
} else if (num1 > num2){
    console.log('O maior número é o ' + num1);
} else {
    console.log('Os números são iguais.');
}

// Exercício 03

let numero1 = 11;
let numero2 = 13;
let numero3 = 02;

if (numero1 > numero2 && numero1 > numero3){
    console.log('O maior número é o ' + numero1);
} else if (numero2 > numero1 && numero2 > numero3){
    console.log('O maior número é o ' + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log('O maior número é o ' + numero3);
} else {
    console.log('Os 03 números são iguais.');
}

// Exercicio 04

let number = 3.2;

if (number >= 0.1){
    console.log('positive');
} else if (number < 0){
    console.log('negative');
} else {
    console.log('zero');
}

// Exercício 05

let lado1 = 80;
let lado2 = 10;
let lado3 = 60;

angulos = lado1 + lado2 + lado3;

if (angulos === 180) {
    console.log('true');

} else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
    console.log('ERRO: o valor de algum ângulo do triângulo é negativo.');

} else if (angulos != 180) {
    console.log('false');

} else {
    console.log('.');
}

// Exercício 06

// Exercício 07

let nota = 0;

if(nota > 100) {
    console.log('Nota inválida');
} else if (nota === 100) {
    console.log('Aprovado com conceito A');
} else if (nota >= 90) {
    console.log('Aprovado com conceito A');
} else if(nota >= 80) {
    console.log('Aprovado com conceito B');
} else if(nota >= 70) {
    console.log('Aprovado com conceito C');
} else if(nota >= 60) {
    console.log('Aprovado com conceito D');
} else if(nota >= 50) {
    console.log('Aprovado com conceito E');
} else if(nota < 50) {
    console.log('em recuperação com conceito F');
} else if(nota === 0) { 
        console.log('Reprovado');
} else {
    console.log('Nota inválida.')
}













