//EXERCÍCIO 01

// REFERÊNCIA:  https://www.horadecodar.com.br/2020/05/06/como-inverter-uma-string-em-javascript/


// PRIMEIRA OPÇÃO DE RESOLUÇÃO

function verificaPalindrome(palavra){
    let inverso = '';
    let resultado;
    for(let i = palavra.length -1; i >= 0; i -= 1) {
        inverso = inverso + palavra[i];
        if (inverso === palavra) {
            resultado = true;
        } 
    } 
    if(inverso !== palavra){
        resultado = false;
    }

    return resultado;
}
console.log(verificaPalindrome('cachorro'));


// SEGUNDA OPÇÃO DE RESOLUÇÃO


function inversaoCheck(string){
    let resultCheck;
    let invertida = string.split("").reverse().join("");
    if (invertida === string){
        resultCheck = true
    } else {
        resultCheck = false;
    }
    return resultCheck;
   
}
console.log(inversaoCheck('reviver'));