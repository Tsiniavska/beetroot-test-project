// consol.log, let, const
console.log('Hello Word');

let fullName = 'John';
console.log(fullName);

const userName = 'Yuliia';
console.log(userName);

const box = 'advice';
console.log(box);

// prompt, allert, confirm
let username = '';
username = prompt('What is your name?');
console.log(username);

alert('JavaScript');

confirm('Do you agree with the site policy?');

// LMS tasks
// task 1 about user's name
console.log('Привіт', prompt('Як тебе звати?'));

// task 2 about age
const YEAR = 2024;
const yearOfBirth = +prompt('З якого ти року народження?');
console.log('Тобі', YEAR - yearOfBirth, 'років');

// tast 3 about square
const sideLength = +prompt(
  'Назвіть довжину сторони квадрата, а ми порахуємо його периметр'
);
const perimeter = 4;
console.log('Периметр =', perimeter * sideLength);

// task 4 about circle
const radius = +prompt('Назвіть радіус круга, а ми порахуємо його площу');
const area = Math.PI * radius * radius;
console.log('Площа круга =', area);

// task 5 abour distance
const distance = +prompt('Вкажіть відстань між двома містами в кілометрах');
const time = +prompt('Та вкажіть за скільки годин Ви хочете туди дістатись');
const speed = distance / time;
console.log(
  'Швидкість з якою Вам потрібно рухатись щоб встигнути вчасно =',
  speed
);

// task 6 about exchange rate
const value = +prompt('Скільки доларів Ви хочете обміняти в євро?');
const course = 0.91;
const euro = value * course;
console.log('Ваші', Math.round(euro), 'євро');
