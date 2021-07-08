// EXERCÍCIO 01
let n = 5;
let symbol = '*';
let quadrado = ''


for (let i = 0; i < n; i += 1) {
    quadrado = quadrado + symbol;
};

for (let i = 0; i < n; i += 1) {
    console.log(quadrado);
};



// EXERCÍCIO 02

let size = 5;
let simbolo = '*';
let linhaTriangulo = ''


for (let i = 0; i < size; i += 1) {
    linhaTriangulo = linhaTriangulo + simbolo;
    console.log(linhaTriangulo);
}

// EXERCÍCIO 03

let invertido = 5;
let asterisco = '*';
let inputLine = '';
let inputPosition = invertido;

for (let lineIndex = 0; lineIndex < invertido; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= invertido; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + asterisco;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

// EXERCÍCIO 04


let p = 5;
let symbolos= '*';
let inputLines = '';

let midOfMatrix = (p + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= p; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLines = inputLines + symbolos;
    } else {
      inputLines = inputLines + ' ';
    }
  }
  console.log(inputLines);
  inputLines = '';
  controlRight += 1;
  controlLeft -= 1
};

// EXERCÍCIO 05

let m = 7;
let middle = (m + 1) / 2;
let controlLefts = middle;
let controlRights= middle;
let symbols = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= m; col += 1) {
    if (col == controlLefts || col == controlRights || line == middle) {
      outputLine += symbols;
    } else {
      outputLine += ' ';
    }
  }
  controlLefts -= 1;
  controlRights += 1;
  console.log(outputLine);
}

// EXERCÍCIO 06



    let numero = 23;
    let numDeDivisores = 1;
    for(let cont = 2; cont <= numero; cont += 1){   // o cont começa com 02 pois nesse caso é ignorado o número 01 e o próprio número.
        if(numero % cont === 0){
            numDeDivisores = numDeDivisores + 1               // divisores++ ou divisores += 1
        }
    }
    // VERIFICAÇÃO 

    if (numDeDivisores === 2) {
        console.log(numero + '  é Divisível por 1 ou por ele mesmo. Portanto, o Número é Primo')
    } else {
        console.log(numero + ' não é primo.')
    }







