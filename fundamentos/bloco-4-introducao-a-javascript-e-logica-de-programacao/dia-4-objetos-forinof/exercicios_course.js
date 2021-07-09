// OBJETOS

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi a melhor do mundo em ' + player['bestInTheWorld']);

console.log('A jogadora possui' + ' ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata');

// FOR/IN

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let carros = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let key in carros) {
    console.log(key, carros[key]);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food) {
    console.log(position);
  };

  // FOR OF

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
    console.log(value);
  };

  // EXERCÍCIO 01

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let chave in names){
      console.log('Olá ' + names['person1']);
      console.log('Olá ' + names.person2);
      console.log('Olá ' + names.person3);
  }

  // EXERCÍCIO 02

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let indice in car){
      console.log(indice, car.model, car.manufacturer, car.year);
  }