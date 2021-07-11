function somaTodosNumeros(number){
    let soma = 0;
    
    for(let index = 1; index <= number; index +=1){
        soma += index; // soma = soma + index;
       
    }
    return soma;
}
console.log(somaTodosNumeros(5));