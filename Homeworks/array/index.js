// Мінімум
/* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить 
назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
  Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
  що ще не придбані, а потім - ті, що вже придбали.
  Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний. */

const shoppingList = [
  {
    productName: 'iceCream',
    quantity: 4,
    purchased: true,
    price: 30,
    amount: 120,
  },
  {
    productName: 'orange',
    quantity: 5,
    purchased: false,
    price: 15,
    amount: 75,
  },
  {
    productName: 'chocolate',
    quantity: 3,
    purchased: true,
    price: 35,
    amount: 105,
  },
  {
    productName: 'snickers',
    quantity: 2,
    purchased: false,
    price: 35,
    amount: 70,
  },
];

const purchasedGoods = shoppingList.sort((a, b) => {
  if (a.purchased === b.purchased) {
    return 0;
  } else if (a.purchased) {
    return 1;
  } else {
    return -1;
  }
});
console.log('purchasedGoods', purchasedGoods);

const boughtMark = (someName) => {
  const product = shoppingList.find((item) => item.productName === someName);
  if (product) {
    product.purchased = true;
  }
};
boughtMark();

// Норма
// Task 1
/* Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
  в якому продукт, що ми шукаємо, буде відсутнім) */
const removeProduct = (productName) => {
  const indexToRemove = shoppingList.findIndex(
    (item) => item.productName === productName
  );
  if (indexToRemove !== -1) {
    const updatedShoppingList = [
      ...shoppingList.slice(0, indexToRemove),
      ...shoppingList.slice(indexToRemove + 1),
    ];

    return updatedShoppingList;
  } else {
    console.log(`"${productName}" не знайдено`);
    return shoppingList;
  }
};

const updatedList = removeProduct('iceCream');
console.log(updatedList);

// Task 2
/* Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку 
продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
а кількості товарів стало 2, то сума буде 24. */
const addToShoppingList = (shoppingList, productName, quantityToAdd) => {
  const productExists = shoppingList.some(
    (item) => item.productName === productName
  );
  if (productExists) {
    shoppingList.forEach((item) => {
      if (item.productName === productName) {
        item.quantity += quantityToAdd;
        item.amount = item.quantity * item.price;
      }
    });
  } else {
    const newItem = {
      productName: productName,
      quantity: quantityToAdd,
      purchased: false,
      price: 0,
      amount: 0,
    };
    shoppingList.push(newItem);
  }
  return shoppingList;
};
const newShoppingList = addToShoppingList(shoppingList, 'chocolate', 4);
console.log(newShoppingList);

// Максимум
// Task 1
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const calculateTotalAmount = (shoppingList) => {
  return shoppingList.reduce((total, productName) => {
    return total + productName.quantity * productName.price;
  }, 0);
};
console.log(calculateTotalAmount(shoppingList));

// Task 2
// Підрахунок суми всіх (не) придбаних продуктів.
const calculateTotalAmountBought = (shoppingList) => {
  return shoppingList.reduce((total, productName) => {
    if (productName.purchased === true) {
      return total + productName.quantity * productName.price;
    } else {
      return total;
    }
  }, 0);
};
console.log(calculateTotalAmountBought(shoppingList));

// Task 3
/* Показання продуктів в залежності від суми, 
(від більшого до меншого / від меншого до більшого, в залежності від параметра функції, 
який вона приймає) */

// від більшого до меншого
const descendingSorting = (shoppingList) => {
  shoppingList.sort((productA, productB) => productB.amount - productA.amount);
  return shoppingList;
};
console.log(descendingSorting(shoppingList));

//  Local Storage
const nameProduct = {
  items: localStorage.getItem('nameProduct')
    ? JSON.parse(localStorage.getItem('nameProduct'))
    : [],
  add: function (name, additionalData) {
    const newItem = {
      name: name,
      ...additionalData,
    };
    this.items.push(newItem);
    localStorage.setItem('nameProduct', JSON.stringify(this.items));
  },
};
