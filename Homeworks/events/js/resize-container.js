// Task 2
/* Створити HTML-сторінку з блоком тексту в рамці. 
Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому 
кутку і тягнути її далі. */

const container = document.getElementById('container');
let isResizing = false;
let prevX = 0;
let prevY = 0;

container.addEventListener('mousedown', (event) => {
  const cornerWidth = 20;
  const cornerHeight = 20;

  const containerRect = container.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  const isCorner =
    mouseX > container.offsetWidth - cornerWidth &&
    mouseY > container.offsetHeight - cornerHeight;

  if (isCorner) {
    isResizing = true;
    prevX = event.clientX;
    prevY = event.clientY;
    document.addEventListener('mousemove', resizeContainer);
    document.addEventListener('mouseup', stopResize);
  }
});

const resizeContainer = (event) => {
  const dx = event.clientX - prevX;
  const dy = event.clientY - prevY;

  const newWidth = container.offsetWidth + dx;
  const newHeight = container.offsetHeight + dy;

  if (newWidth > 100 && newHeight > 100) {
    container.style.width = newWidth + 'px';
    container.style.height = newHeight + 'px';
    prevX = event.clientX;
    prevY = event.clientY;
  }
};

const stopResize = () => {
  isResizing = false;
  document.removeEventListener('mousemove', resizeContainer);
  document.removeEventListener('mouseup', stopResize);
};

export { resizeContainer, stopResize };
