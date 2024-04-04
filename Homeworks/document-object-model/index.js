// get element playlist
const DOMplaylist = document.getElementById('js-playlist');
console.log(DOMplaylist);

if (DOMplaylist) {
  const addItemToList = (item) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const authorSpan = document.createElement('span');
    authorSpan.classList.add('item');
    authorSpan.innerText = `author: ${item.author}`;
    li.appendChild(authorSpan);

    const songSpan = document.createElement('span');
    songSpan.classList.add('item');
    songSpan.innerText = `song: ${item.song}`;
    li.appendChild(songSpan);
    DOMplaylist.appendChild(li);
  };

  [
    {
      author: 'LED ZEPPELIN',
      song: 'STAIRWAY TO HEAVEN',
    },

    {
      author: 'QUEEN',
      song: 'BOHEMIAN RHAPSODY',
    },

    {
      author: 'LYNYRD SKYNYRD',
      song: 'FREE BIRD',
    },

    {
      author: 'DEEP PURPLE',
      song: 'SMOKE ON THE WATER',
    },

    {
      author: 'JIMI HENDRIX',
      song: 'ALL ALONG THE WATCHTOWER',
    },

    {
      author: 'AC/DC',
      song: 'BACK IN BLACK',
    },

    {
      author: 'QUEEN',
      song: 'WE WILL ROCK YOU',
    },

    {
      author: 'METALLICA',
      song: 'ENTER SANDMAN',
    },
  ].forEach((item) => {
    addItemToList(item);
  });
}
