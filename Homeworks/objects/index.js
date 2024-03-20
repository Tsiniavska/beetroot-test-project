// Мінімум
// Task 1
/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), 
і наступні методи для роботи з цим об'єктом:
  Метод, який виводить на екран інформацію про автомобіль.
  Додавання ім’я водія у список
  Перевірка водія на наявність його ім’я у списку
  Підрахунок необхідного часу та кількості палива для подолання переданої відстані з 
  середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити 
  перерву на 1 годину. */

const car = {
  manufacturer: 'Ford',
  model: 'Ford Mustang',
  yearOfManufacture: '2010 рік',
  averageSpeed: 90,
  fuelTankCapacity: 60,
  fuelPer100: 14,
  driver1: 'John',
  driver2: 'Ron',
  driver3: 'Den',
};
// Іформація про водія
console.log('Інформація про автомобіль', car);

// Додавання нового водія
car.driver4 = 'Steven';

// Перевірка водія на його наявність у списку
const key = prompt('Введіть водія якого шукаєте');
const value = car[key];
if (value !== undefined) {
  console.log(value);
} else {
  console.log('Такого водія не знайдено');
}

/* Підрахунок необхідного часу та кількості палива для подолання переданої відстані з 
  середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити 
  перерву на 1 годину. */
const distance = Number(prompt('Введіть відстань для подолання:'));

const hours = distance / car.averageSpeed;
const breaks = Math.floor(hours / 4);
const travelTime = hours + breaks;

const fuel = (distance / 100) * car.fuelPer100;

console.log(`Необхідний час подорожі: ${travelTime} год.`);
console.log(`Необхідна кількість палива: ${fuel} л.`);

// Норма
// Task 1
/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи 
з цим об'єктом:
  Для виведення часу на екран.
  Зміни часу на передану кількість секунд.
  Зміни часу на передану кількість хвилин.
  Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
а не «20:59:75». Також потрібно передбачити можливість того що користувач може 
передати 150 секунд, або 75 хвилин. */

const currentTime = new Date();
const time = {
  hours: currentTime.getHours(),
  minutes: currentTime.getMinutes(),
  seconds: currentTime.getSeconds(),
  displayTime: function () {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },
  addSeconds: function () {
    const addSeconds = Number(prompt('Вкажіть кількість секунд до 60'));
    if (addSeconds >= 0 && addSeconds <= 59) {
      console.log(`${this.hours}:${this.minutes}:${this.seconds + addSeconds}`);
    } else if (addSeconds === 60) {
      console.log(`${this.hours}:${this.minutes + 1}:${this.seconds}`);
    } else {
      console.log('Не коректно введено секунди');
    }
  },
  addMinutes: function () {
    const addMinutes = Number(prompt('Вкажіть кількість хвилин до 60'));
    if (addMinutes >= 0 && addMinutes <= 59) {
      console.log(`${this.hours}:${this.minutes + addMinutes}:${this.seconds}`);
    } else if (addSeconds === 60) {
      console.log(`${this.hours + 1}:${this.minutes}:${this.seconds}`);
    } else {
      console.log('Не коректно введено хвилини');
    }
  },
  addHours: function () {
    const addHours = Number(prompt('Вкажіть кількість годин'));
    if (addHours >= 0 && addHours <= 59) {
      console.log(`${this.hours + addHours}:${this.minutes}:${this.seconds}`);
    } else {
      console.log('Не коректно введено секунди');
    }
  },
};
// Виведення часу на екран
time.displayTime();
// Зміни часу на передану кількість секунд.
time.addSeconds();
// Зміни часу на передану кількість хвилин.
time.addMinutes();
// Зміни часу на передану кількість годин.
time.addHours();

// Максимум
// Task 1
/* Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
  Складання 2-х об'єктів-дробів.
  Віднімання 2-х об'єктів-дробів.
  Множення 2-х об'єктів-дробів.
  Ділення 2-х об'єктів-дробів.
  Скорочення об'єкта-дробу. */

const fraction = {
  numerator: 1,
  denominator: 2,
  showAddFraction: function () {
    const newNumerator = Number(
      prompt('Введіть чисельник нового дробу, який треба додати')
    );
    const newDenominator = Number(
      prompt('Введіть знаменник нового дробу, який треба додати')
    );
    const sumNumerator =
      this.numerator * newDenominator + newNumerator * this.denominator;
    const sumDenominator = this.denominator * newDenominator;
    console.log(sumNumerator + '/' + sumDenominator);
  },
  showSubtractingFractions: function () {
    const newNumerator = Number(
      prompt('Введіть чисельник нового дробу, який треба відняти')
    );
    const newDenominator = Number(
      prompt('Введіть знаменник нового дробу, який треба відняти')
    );
    const differenceNumerator =
      this.numerator * newDenominator - newNumerator * this.denominator;
    const differenceDenominator = this.denominator * newDenominator;
    console.log(differenceNumerator + '/' + differenceDenominator);
  },
  showMultiplicationFractions: function () {
    const newNumerator = Number(
      prompt('Введіть чисельник нового дробу, на який треба помножити')
    );
    const newDenominator = Number(
      prompt('Введіть знаменник нового дробу, на який треба помножити')
    );
    const productNumerator = this.numerator * newNumerator;
    const productDenominator = this.denominator * newDenominator;
    console.log(productNumerator + '/' + productDenominator);
  },
  showDivisionFractions: function () {
    const newNumerator = Number(
      prompt('Введіть чисельник нового дробу, на який треба поділити')
    );
    const newDenominator = Number(
      prompt('Введіть знаменник нового дробу, на який треба поділити')
    );
    const quotientNumerator = this.numerator * newDenominator;
    const quotientDenominator = this.denominator * newNumerator;
    console.log(quotientNumerator + '/' + quotientDenominator);
  },
};
fraction.showAddFraction();
fraction.showSubtractingFractions();
fraction.showMultiplicationFractions();
fraction.showDivisionFractions();
