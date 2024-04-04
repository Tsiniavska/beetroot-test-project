import create from './helpers/create.js';
import { getById } from './helpers/get.js';

const createFilmListItem = (title, description) => {
  const li = create('li');
  li.textContent = title;
  const button = create('button');
  button.classList.add('description-button');
  button.textContent = 'Опис';
  let descriptionVisible = false; // Визначає чи видимий опис

  button.addEventListener('click', () => {
    // Перевіряємо, чи вже є відображений опис
    if (descriptionVisible) {
      const descriptionDiv = li.querySelector('.film-description');
      if (descriptionDiv) {
        li.removeChild(descriptionDiv); // Видаляємо опис, якщо він вже є
        descriptionVisible = false; // Опис був видалений, тому false
      }
    } else {
      // Якщо опис ще не відображено, додаємо його
      const descriptionDiv = create('div');
      descriptionDiv.classList.add('film-description');
      descriptionDiv.textContent = description;
      li.appendChild(descriptionDiv);
      descriptionVisible = true; // Встановлюємо true, оскільки опис тепер відображений
    }
  });

  li.appendChild(button);
  return li;
};

// Отримуємо елементи форми та DOM-елементи, що потрібні для відображення результатів
const DOMSearchForm = getById('js-search-form');
const DOMFilmNameInput = document.querySelector('input[name="film-name"]');
const DOMFilmTypeSelect = document.querySelector('select[name="film-type"]');
const DOMFilmList = getById('js-film-list');
const DOMFilmListEmpty = getById('js-film-list-empty');

// Додаємо обробник події для події натискання кнопки пошуку
DOMSearchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Отримуємо значення з поля введення та вибраного типу фільму
  const filmName = DOMFilmNameInput.value.trim();
  const filmType = DOMFilmTypeSelect.value;

  // Якщо поле інпута порожнє, виводимо повідомлення під інпутом
  if (!filmName) {
    const errorMessage = getById('js-film-name-error');
    errorMessage.textContent = 'Введіть, будь ласка, назву фільму';
    return;
  } else {
    const errorMessage = getById('js-film-name-error');
    errorMessage.textContent = '';
  }

  // Відповідно до типу фільму
  if (!filmType) {
    const errorMessage = getById('js-film-type-error');
    errorMessage.textContent = 'Виберіть, будь ласка, тип фільму';
    return;
  } else {
    const errorMessage = getById('js-film-type-error');
    errorMessage.textContent = '';
  }

  // Викликаємо функцію для отримання списку фільмів та передаємо отримані значення
  try {
    await getFilmListData(DOMFilmList, DOMFilmListEmpty, filmName, filmType);
  } catch (error) {
    console.error('Помилка отримання даних про фільми:', error);
  }
});

// Функція, яка виконує запит та відображає результати
const getFilmListData = async (
  DOMFilmList,
  DOMFilmListEmpty,
  filmName,
  filmType
) => {
  const apiKey = '8c122d75';
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
    filmName
  )}&type=${filmType}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === 'True') {
    // Видаляємо блок "список порожній", якщо він існує
    if (DOMFilmListEmpty) {
      DOMFilmListEmpty.remove();
    }
    // Очищаємо список фільмів перед додаванням нових
    DOMFilmList.innerHTML = '';
    // Додаємо фільми до списку
    data.Search.forEach(async ({ Title, imdbID }) => {
      // Отримати додаткові дані про фільм (у тому числі опис) за його imdbID
      const filmDetailResponse = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      );
      const filmDetailData = await filmDetailResponse.json();
      const description = filmDetailData.Plot;
      DOMFilmList.appendChild(createFilmListItem(Title, description));
    });
    // data.Search.forEach(({ Title }) => {
    //   DOMFilmList.appendChild(createFilmListItem(Title));
    // });
  } else {
    // Показуємо повідомлення про помилку, якщо отримана відповідь не містить фільмів
    throw new Error('Масив фільмів порожній або відсутній');
  }
};
export { getFilmListData };
