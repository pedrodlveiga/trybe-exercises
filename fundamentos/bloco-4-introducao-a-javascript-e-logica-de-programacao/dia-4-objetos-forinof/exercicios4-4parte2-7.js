function verificaFimPalavra(word, ending){
    let inverteWord = word.split('').reverse().join('');
    let inverteEnding = ending.split('').reverse().join('');
    let result;
    for(let i = 0; i < inverteEnding.length; i += 1){ // o tamanho máximo (length) é o da variável inverteEnding pq queremos saber se o final da palavra é igual a parte final da variável invertWord.
        if(inverteWord[i] !== inverteEnding[i]){
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result
}
console.log(verificaFimPalavra('pernambuco', 'res'));   
    