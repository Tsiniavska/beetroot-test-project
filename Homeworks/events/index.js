import editText from './js/edit-text.js';
import { resizeContainer, stopResize } from './js/resize-container.js';

// * Initialize

// Task 1
/* Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється 
div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих 
поєднань клавіш. */
editText();

// Task 2
/* Створити HTML-сторінку з блоком тексту в рамці. 
Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому 
кутку і тягнути її далі. */
resizeContainer(Event);
stopResize();
