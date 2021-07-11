//EXERCÍCIO 04

// SOLUÇÃO 01

function maiorPalavra(nomes){
    let caracteres = nomes[0];
       for(let index = 0; index <= nomes.length; index += 1){
           if(caracteres.length < nomes.length){
               caracteres = nomes[index];
            }
        }
    return caracteres
}   

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// SOLUÇÃO 02

function maiorString(palavra){
    let maiorPalavra = palavra[0];
    for (let indice in palavra){
        if(maiorPalavra.length < palavra[indice].length){
            maiorPalavra = palavra[indice];
        }
    }
    return maiorPalavra;
}
console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
