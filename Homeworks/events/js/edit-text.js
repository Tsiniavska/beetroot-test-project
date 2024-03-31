// Task 1
/* Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється 
div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих 
поєднань клавіш. */

const DOMText = document.getElementById('js-text');
console.log(DOMText);

const editText = () => {
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
      event.preventDefault();
      const js_text = document.getElementById('js-text');
      const textarea = document.createElement('textarea');
      textarea.value = js_text.innerText;
      js_text.replaceWith(textarea);
      textarea.focus();
    } else if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      const textarea = document.querySelector('textarea');
      const js_text = document.createElement('div');
      js_text.id = 'js-text';
      js_text.contentEditable = true;
      js_text.innerText = textarea.value;
      textarea.replaceWith(js_text);
    }
  });
};

export default editText;
