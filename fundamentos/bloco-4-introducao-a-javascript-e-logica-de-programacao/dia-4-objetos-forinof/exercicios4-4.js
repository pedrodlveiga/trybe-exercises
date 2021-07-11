// EXERCÍCIO 01

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda ' + info.personagem);

  let objeto = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas',
      recorrente: 'sim'
  }

// EXERCÍCIO 02

info.recorrente = 'sim'
console.log(info)

// EXERCÍCIO 03

for (let key in info){
    console.log(key);
}

// EXERCÍCIO 04
for (let key in info){
    console.log(info[key]);
}

// EXERCÍCIO 05

for(let key in objeto){
    console.log(objeto[key]);
    console.log(info.personagem, ' e ', objeto.personagem)
    console.log(info.origem, ' e ', objeto.origem)
    console.log(info.nota, ' e ', objeto.nota)
    if(key === 'recorrente' && info[key] === 'sim' && objeto[key] === 'sim'){
    console.log('Ambos recorrentes')
    } else {
    console.log('Apenas um ou nenhum é recorrente')
    }
}




