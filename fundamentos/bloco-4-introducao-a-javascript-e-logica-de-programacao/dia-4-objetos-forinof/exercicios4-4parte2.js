function verificaPalindrome(palavra){
    let resultado = '';
    for(let i = palavra.length -1; i >= 0; i -= 1) {
        resultado += palavra[i];
        
    }
    return resultado;
    

}
console.log(verificaPalindrome('futebol'));

function inversaoCheck(string){
    let invertida = string.split("").reverse().join("");
    return invertida;
}
console.log(inversaoCheck('futebol'));