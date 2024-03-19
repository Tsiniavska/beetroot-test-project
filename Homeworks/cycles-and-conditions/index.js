// Мінімум
// Task 1
/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
const age = Number(prompt('Скільки Вам років?'));
switch (true) {
  case age === 0:
  case age >= 1 && age <= 11: {
    console.log('Ви дитина');
    break;
  }
  case age >= 12 && age <= 17: {
    console.log('Ви підліток');
    break;
  }
  case age >= 18 && age <= 59: {
    console.log('Ви дорослий');
    break;
  }
  case age >= 60 && age <= 150: {
    console.log('Ви пенсіонер');
    break;
  }
  default: {
    console.log('Ви ввели не коректні дані');
  }
}

// Task 2
/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */
const number = Number(prompt('Вкажіть число від 0-9'));
switch (true) {
  case number === 0: {
    console.log(')');
    break;
  }
  case number === 1: {
    console.log('!');
    break;
  }
  case number === 2: {
    console.log('@');
    break;
  }
  case number === 3: {
    console.log('#');
    break;
  }
  case number === 4: {
    console.log('$');
    break;
  }
  case number === 5: {
    console.log('%');
    break;
  }
  case number === 6: {
    console.log('^');
    break;
  }
  case number === 7: {
    console.log('&');
    break;
  }
  case number === 8: {
    console.log('*');
    break;
  }
  case number === 9: {
    console.log('(');
    break;
  }
  default: {
    console.log('Символи закінчились ))');
  }
}

// Task 3
/* Підрахуй суму всіх чисел в заданому користувачем діапазоні. */
const fromTheNumber = Number(prompt('Вкажіть діапазон чисел від ...'));
const toTheNumder = Number(prompt('до ...'));
let sumOfThem = 0;
for (let i = fromTheNumber; i <= toTheNumder; i++) {
  sumOfThem += i;
}
console.log('Сума всіх чисел в заданому діапазоні буде', sumOfThem);

// Task 4
/* Запитай у користувача 2 числа і знайди найбільший спільний дільник. */
const firstNumber = Number(prompt('Вкажіть перше число'));
const secondNumber = Number(prompt('Вкажіть друге число'));
let minNumber = Math.min(firstNumber, secondNumber);
let commonNumber = 1;
for (let i = 2; i <= minNumber; i++) {
  if (firstNumber % i === 0 && secondNumber % i === 0) {
    commonNumber = i;
  }
  console.log('Найбільший спільний дільник:', commonNumber);
}

// Task 5
/* Запитай у користувача число і виведи всі дільники цього числа. */
const anyNumber = Number(prompt('Назвіть число'));
for (let i = 1; i <= anyNumber; i++) {
  if (anyNumber % i === 0) {
    console.log('Ось всі дільники цього числа', i);
  }
}

// Норма
// Task 1
/* Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом. */
const fiveDigitNumber = String(prompt('Вкажіть п’ятирозрядне число'));
const reversedNumber = fiveDigitNumber.split('').reverse().join('');
if (fiveDigitNumber === reversedNumber) {
  console.log('так, це число є паліндромом', reversedNumber);
} else {
  console.log('ні, це число не є паліндромом', reversedNumber);
}

// Task 2
/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%. */
const sumPurhase = Number(prompt('Яка сума вашої покупки ?'));
if (sumPurhase >= 200 && sumPurhase <= 300) {
  console.log(
    'Сума до сплати становить',
    sumPurhase - (sumPurhase * 3) / 100,
    'з урахуванням 3% знижки'
  );
} else if (sumPurhase >= 300 && sumPurhase <= 500) {
  console.log(
    'Сума до сплати становить',
    sumPurhase - (sumPurhase * 5) / 100,
    'з урахуванням 5% знижки'
  );
} else sumPurhase >= 500;
{
  console.log(
    'Сума до сплати становить',
    sumPurhase - (sumPurhase * 7) / 100,
    'з урахуванням 7% знижки'
  );
}

// Task 3
/* Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 10; i++) {
  let tenNumbers = Number(prompt('Будь ласка, введіть 10 чисел'));
  if (tenNumbers > 0) {
    positiveCount += 1;
  } else if (tenNumbers < 0) {
    negativeCount += 1;
  } else {
    zeroCount += 1;
  }

  if (tenNumbers % 2 === 0 && tenNumbers !== 0) {
    evenCount += 1;
  } else if (tenNumbers !== 0) {
    oddCount += 1;
  }
}
console.log('Кількість додатних чисел:', positiveCount);
console.log("Кількість від'ємних чисел:", negativeCount);
console.log('Кількість нулів:', zeroCount);
console.log('Кількість парних чисел (крім нулів):', evenCount);
console.log('Кількість непарних чисел:', oddCount);

// Task 4
/* Зацикли відображення днів тижня таким чином: «День тижня. 
Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK. */

let day = true;
while (day) {
  if (!confirm('Понеділок, хочеш побачити наступний день ?')) break;
  if (!confirm('Вівторок, хочеш побачити наступний день ?')) break;
  if (!confirm('Середа, хочеш побачити наступний день ?')) break;
  if (!confirm('Четвер, хочеш побачити наступний день ?')) break;
  if (!confirm("П'ятниця, хочеш побачити наступний день ?")) break;
  if (!confirm('Субота, хочеш побачити наступний день ?')) break;
  if (!confirm('Неділя, хочеш побачити наступний день ?')) break;
}

// Максимум
// Task 1
/* Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 
і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, 
записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
Залежно від того що вказав користувач, зменшуй діапазон. 
Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: 
"бінарний пошук"). */
let min = 0;
let max = 100;
let guess;

while (true) {
  guess = Math.floor((min + max) / 2);
  let response = prompt(`Ваше число > ${guess}, < ${guess} або = ${guess}?`);

  if (response === '>') {
    min = guess + 1;
  } else if (response === '<') {
    max = guess - 1;
  } else if (response === '=') {
    alert(`Ви загадали число ${guess}`);
    break;
  } else {
    alert('Будь ласка, введіть коректну відповідь: ">", "<" або "=="');
  }
  if (min > max) {
    alert('Не вірні дані');
    break;
  }
}

// Task 2
/* Виведи таблицю множення для всіх чисел від 2 до 9. 
Кожне число необхідно помножити на числа від 1 до 10. */
for (let i = 2; i <= 9; i++) {
  console.log(`Таблиця множення для числа ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
