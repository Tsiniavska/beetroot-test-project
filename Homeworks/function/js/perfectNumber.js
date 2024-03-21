// Норма
// Task 1
/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників. */

const perfectNumber = () => {
  const givenNumber = Number(
    prompt("Введіть число для перевірки на 'досконале число'")
  );
  let sum = 0;
  if (isNaN(givenNumber)) {
    throw new Error('Invalid');
  }
  for (let i = 1; i <= givenNumber; i++) {
    if (givenNumber % i === 0) {
      sum += i;
    }
  }
  return sum - givenNumber === givenNumber
    ? `${givenNumber} є досконалим числом`
    : `${givenNumber} не є досконалим числом`;
};

export default perfectNumber;
