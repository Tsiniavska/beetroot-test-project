import { getById } from './helpers/get.js';

const filmList = () => {
  // * Get DOM film list
  const DOMFilmList = getById('js-film-list');

  // * Check if DOM film list exists
  if (!DOMFilmList) {
    throw new Error('Не вдалось отримати список в html');
  }
  console.log(DOMFilmList);

  // * Get DOM film list empty block
  const DOMFilmListEmpty = getById('js-film-list-empty');

  // * Check if DOM film list empty block exists
  if (!DOMFilmListEmpty) {
    throw new Error('Не вдалось получити "empty block" в html');
  }

  import('./get-film-list-data.js')
    .then((fileResponse) => {
      fileResponse.getFilmListData(DOMFilmList, DOMFilmListEmpty);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default filmList;
