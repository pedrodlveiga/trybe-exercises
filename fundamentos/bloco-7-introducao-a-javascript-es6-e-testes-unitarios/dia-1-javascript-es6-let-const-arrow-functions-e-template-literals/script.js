// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// EXERCÍCIO 01

const testingScope = (escopo) => { 
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}
testingScope(true);


// EXERCÍCIO 02

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaCrescente = array => {
    const ordena = array.sort((a, b) => a - b);
    return ordena;
}
const resultado = ordenaCrescente(oddsAndEvens);
console.log(`Os números ${resultado} se encontram ordenados de forma crescente !`)

//Forma resumida usando uma única linha.

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);


// PARTE 02

// EXERCÍCIO 01 - Fatorial

// Recursiva usando laço de repetição For.

const fatorial = numero => {
    let resultado = 1
    for (let index = 2; index <= numero; index += 1) {
        resultado *= index;  
    }
    return resultado;
}
console.log(fatorial(5));

// Recursiva usando Operador ternário;

const factorial = number => number > 1 ? number * factorial(number - 1) : 1; 
console.log(factorial(5));

// Recursiva usando estrutura condicional If/Else;

const factorialRec = num => {
    if (num === 1) {
        return 1;
    }
    return num * factorialRec (num - 1);
}
console.log(factorialRec(5));

// EXERCÍCIO 02

const maiorPalavra = texto => {
    let arrayPalavras = texto.split(' ');
    let maxComprimento = 0; // contador de comprimento máximo da palavra.
    let retorno = '';

    for (const palavra of arrayPalavras) { // for of: para cada palavra neste array de palavras. for of: percorre o array de string.
        if (palavra.length > maxComprimento) {
            maxComprimento.length = palavra.length;
            retorno = palavra;
        }
        
    }
    return retorno;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

//Usando uma linha com o método sort.

const longestWord = texto => texto.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

//EXERCÍCIO 03

// let cliqueBotao = document.getElementById("botao");

let contClique = 0 // O Contador inicia em Zero.
let textoCont = document.getElementById("texto");
let clique = document.getElementById("botao");
const contagem = () =>  textoCont.innerHTML = contClique += 1;
clique.addEventListener('click', contagem);

// EXERCÍCIO 04

//FUNÇÃO 01

const array = "Tryber x aqui!";

function funcOne(string) {

    let arraySplit = array.split(' ');
    let arrayDiv = arraySplit;
    arrayDiv.splice(1,1, `${ string }`);
    let convertString = arrayDiv.toString();
    return convertString;
}
// console.log(funcOne("Pedro"));

// FUNÇÃO 02

const array2 = ["Android", "iOS", "Architecture", "Teach", "Run"];

const funcTwo = (skills) => skills.sort((a, b) => { return a.localeCompare(b); });

// console.log(funcTwo(array2));

// CONCATENAÇÃO usando template literals.

console.log(`${funcOne("Pedro")} 
Tudo bem? 
As minhas cinco principais habilidades são: 
${funcTwo(array2)}.`)







 