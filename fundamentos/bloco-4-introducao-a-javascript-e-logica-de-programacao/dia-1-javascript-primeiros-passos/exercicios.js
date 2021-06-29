
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

let pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" podendo pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, podendo, no primeiro movimento, andar duas casas.");
    break;
  default:
    console.log('Erro, peça inexistente!');
    break;
};


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

// Exercício 08


let n1 = 69;
let n2 = 485;
let n3 = 23;

if(n1%2 == 0 || n2%2 == 0 || n3%2 == 0){
    console.log(true);
} else {
    console.log(false)
}

// Exerxício 09

let nb1 = 12;
let nb2 = 10;
let nb3 = 28;

if(nb1%2 !== 0 || nb2%2 !== 0 || nb3%2 !== 0){
    console.log(true);
} else {
    console.log(false)
}

// Exercício 10

let custoProduto = 200;
let valorVenda = 400;

let valorCustoTotal = (custoProduto * 20 / 100) + custoProduto;
let lucro = (valorVenda - valorCustoTotal) * 1000;

if(valorVenda < 0){
    console.log('ERRO: o número fornecido é inválido.');

} else if ( custoProduto < 0){ 
    console.log('ERRO: o número fornecido é inválido.');

} else {
    console.log('o lucro é de R$ ' + lucro);
} 

// Exercício 11

let bruto = 3000; // Por favor, informe o salário bruto.
let inss; /* (9 / 100) * bruto; */ // Informe a alíquota do INSS.
let imposto;  

if (bruto > 5189.82) {
    inss = 570.88
    console.log("INSS é igual a R$ " + inss);


} else if (bruto <= 5189.82 && bruto >= 2594.93) {
    inss = (11 / 100) * bruto;
    console.log("INSS é igual a R$ " + inss);
   

} else if (bruto <= 2594.93 && bruto >= 1556.95) {
    inss = (9 / 100) * bruto;;
    console.log("INSS é igual a R$ " + inss);
    
    
} else if (bruto <= 1556.94) {
    inss = (8 / 100) * bruto;
    console.log("INSS é igual a R$ " + inss);


} else {
    console.log('programa finalizado.')
}

let salBase = bruto - inss;

if (salBase >= 4664.68) {
    imposto = ((27.5 / 100) * salBase) - 869.36;
    console.log ('o valor da alíquita do imposto é R$ ' +  imposto);
    console.log('o salario liquido é igual a R$ ' + (salBase - imposto));

} else if (salBase < 4664.68 && salBase >= 3751.06) {
    imposto = ((22.5 / 100) * salBase) - 636.13;
    console.log('o valor da alíquota do imposto é R$ ' + imposto); 
    console.log("o salario liquido é igual a R$ " + (salBase - imposto));

} else if (salBase <= 3741.05 && salBase >= 2826.66) {
    imposto = ((15 / 100) * salBase) - 354.80;
    console.log('o valor da alíquota do imposto é R$ ' + imposto); 
    console.log("o salario liquido é igual a R$ " + (salBase - imposto));    

} else if (salBase <= 2826.65 && salBase >= 1903.99) {
    imposto = ((7.5 / 100) * salBase) - 142.80;
    console.log('o valor da alíquota  do imposto é R$ ' + imposto); 
    console.log("o salario liquido é igual a R$ " + (salBase - imposto));

} else {
    imposto = 0;
    console.log('o contribuinte é isento, ou seja, IR = ' + imposto); 
    console.log("o salario liquido é igual a R$ " + salBase);
}






























