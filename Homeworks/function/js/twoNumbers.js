// Мінімум
// Task 1
/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */
const twoNumbers = {
  firstNumber: Number(prompt('Введіть число')),
  secondNumber: Number(prompt('Введіть ще одне число')),
  returnNumber: function () {
    if (this.firstNumber < this.secondNumber) {
      return -1;
    } else if (this.firstNumber > this.secondNumber) {
      return 1;
    } else if (this.firstNumber === this.secondNumber) {
      return 0;
    }
  },
};
console.log(twoNumbers.returnNumber());

export default twoNumbers;
