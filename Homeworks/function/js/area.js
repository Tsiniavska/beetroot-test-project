// Мінімум
// Task 4
/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */
const sides = {
  length: Number(prompt('Введіть довжину прямокутника')),
  width: Number(prompt('Введіть ширину прямокутника')),
  area: function () {
    if (
      typeof this.length !== 'number' ||
      typeof this.width !== 'number' ||
      isNaN(this.length) ||
      isNaN(this.width)
    ) {
      throw new Error('Invalid');
    } else if (this.width === 0 || isNaN(this.width)) {
      return (this.width = this.length) * this.width;
    } else if (this.length === 0 || isNaN(this.length)) {
      return (this.length = this.width) * this.length;
    } else {
      return this.length * this.width;
    }
  },
};

export default sides;
