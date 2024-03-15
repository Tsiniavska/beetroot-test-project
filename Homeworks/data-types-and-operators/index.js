// Task 1
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(1));

// Task 2
/* Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), 
добийся математично правильної відповіді.*/
const x = +'1';
const y = 2;
console.log(x + y);

// Task 3
/* Користувач вказує обсяг флешки в Гб. 
Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/
const volumeFlashDrive = Number(prompt('Вкажіть обсяг вашої флешки в Гб'));
const oneFileMb = 820;
console.log((volumeFlashDrive * 1024) / oneFileMb);

// Task 3
/* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/
const money = Number(prompt('Скільки грошей у вас в гаманці? грн'));
const price = Number(prompt('Скільки коштує шоколадка?'));
const chocolates = money / price;
const change = money - chocolates * price;
console.log(
  'Ви можете купити',
  Math.round(chocolates),
  'шоколадок.',
  'У вас залишиться',
  change.toFixed(2),
  'грн.'
);

// Task 4
/*Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/
const number = Number(prompt('Назвіть тризначне число'));
const reversedNumber =
  (number % 10) * 100 +
  (Math.floor(number / 10) % 10) * 10 +
  Math.floor(number / 100);
console.log(reversedNumber);

// Task 4
/* Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків*/
const depositAmount = Number(prompt('Введіть суму вкладу'));
const monthPercent = 0.05 / 12;
const amount = depositAmount * monthPercent * 2;
console.log('Сума ваших нарахованих відсотків', amount.toFixed(2));
