// PARTE 01
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Exercício 01

const customerInfo = (order) => {
    console.log(`Olá, Simionato Pimpão! Entrega para: ${order.name}, Telefone: ${order.phoneNumber}, Endereço: ${order.address.street}, ${order.address.number}, ${order.address.apartment}`)
}
customerInfo(order);

// Exercício 02

const orderModifier = (order) => {
  const novoComprador = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá, ${novoComprador}, o total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${newTotal},00`)
}

orderModifier(order);

// PARTE 02

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 01

const funcOne = (one) => {
  const turnoManha = {
    turno: 'manhã',
  }
  const insereTurno = Object.assign(lesson2, turnoManha)
  return insereTurno;
}
console.table(funcOne());

// Exercício 02

const funcTwo = (two) => {
  const listaKeys = Object.keys(lesson1);
  return listaKeys;
}
console.table(funcTwo());

// Exercício 03

const funcThree = (three) => {
  const tamanhoObj = Object.entries(lesson3);
  return tamanhoObj.length;
}
console.log(funcThree());

// Exercício 04

const funcFour = (four) => { //por parametro.
  const valorObj = Object.values(four);
  return valorObj;
}
console.log(funcFour(lesson1));

// Exercício 05

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
const estNum = allLessons.lesson1.numeroEstudantes;
console.log(estNum);

// Exercício 06

const numTotal = (obj) => { // por parametro.
  let numEst = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
  return numEst;
}
console.log(numTotal(allLessons));

// Exercício 07

const pegaValorPelaPosicao = (objeto, number) => {
  const posValue = Object.values(objeto)[number];
  return posValue;
}
console.log(pegaValorPelaPosicao(allLessons.lesson1, 0));

// Exercício 08

const verificaPar = (objetu) => {
  if(objetu.hasOwnProperty('turno')) {
    console.log('existe');
  } else {
    console.log('não existe');
  }
}
verificaPar(lesson1)

const checkPar = (coisa, chaves, valore) => {
  const checkPares = Object.entries(coisa);
  let verificacao = false;
  for (let indice in checkPares){
    if(checkPares[indice][0] === chaves && checkPares[indice][1] === valore) verificacao = true;
    }
  return verificacao;
};
console.log(checkPar(lesson3, 'turno', 'noite'))