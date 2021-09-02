// EXERCÍCIO 02


/* vamos fazer, passo a passo, uma Promise
Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada.
Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione. */

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);

    sum < 8000 ? resolve(sum) : reject(sum);
  });

  myPromise
    .then((sum) => console.log(`Promise resolvida ${sum}`))
    .catch((sum) => console.log(`Promise rejeitada ${sum}`));
};

fetchPromise();


const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    sum < 8000 ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise();

// BONUS

/* Utilize somente Higher Order Functions para fazer as operações com o array;
Todas as soluções acima realizaram esse bonus.
Refatore a Promise para utilizar somente async e await . */

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();