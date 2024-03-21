import allArguments from './js/allArguments.js';
import twoNumbers from './js/twoNumbers.js';
import factorial from './js/factorial.js';
import oneNumber from './js/oneNumber.js';
import sides from './js/area.js';
import perfectNumber from './js/perfectNumber.js';

// * Initialize
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
allArguments();

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні. */
console.log(twoNumbers.returnNumber());

// Напиши функцію, яка обчислює факторіал переданого їй числа.
factorial();

/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149. */
oneNumber();

/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */
console.log(sides.area());

/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників. */
console.log(perfectNumber());
