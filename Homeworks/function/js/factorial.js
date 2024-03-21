// Мінімум
// Task 2
// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  if (typeof n !== 'number' || isNaN(n) || n % 1 !== 0) {
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
const number = Number(prompt('Вкажіть ціле число'));
console.log(`Факторіал числа ${number} дорівнює: ${factorial(number)}`);

export default factorial;
