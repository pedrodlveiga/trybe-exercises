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