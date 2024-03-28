// get element playlist
const DOMplaylist = document.getElementById('js-playlist');
// console.log(DOMplaylist);

if (DOMplaylist) {
  const addTitle = (text) => {
    const h3 = document.createElement('h3');
    h3.classList.add('playlist-title');
    h3.innerText = 'Playlist';
    DOMplaylist.appendChild(h3);
    // create ol
    const ol = document.createElement('ol');
    DOMplaylist.appendChild(ol);
    return ol;
  };
  // add li to ol
  const addItemToList = (text) => {
    const ol = DOMplaylist.querySelector('ol');
    const li = document.createElement('li');
    li.classList.add('list-item');
    ol.appendChild(li);
    return li;
  };
  const addTextList = (texts) => {
    const li = addItemToList();
    texts = texts.split(', ');
    for (let i = 0; i < 2; i++) {
      const div = document.createElement('div');
      const span = document.createElement('span');
      span.innerText = texts[i];
      div.appendChild(span);
      li.appendChild(div);
    }
  };

  addTitle('Playlist');
  addTextList('author: "LED ZEPPELIN",, song:"STAIRWAY TO HEAVEN"');
  addTextList('author: "QUEEN",, song:"BOHEMIAN RHAPSODY"');
  addTextList('author: "LYNYRD SKYNYRD",, song:"FREE BIRD"');
  addTextList('author: "DEEP PURPLE",, song:"SMOKE ON THE WATER"');
  addTextList('author: "JIMI HENDRIX",, song:"ALL ALONG THE WATCHTOWER"');
  addTextList('author: "AC/DC",, song:"BACK IN BLACK"');
  addTextList('author: "QUEEN",, song:"WE WILL ROCK YOU"');
  addTextList('author: "METALLICA",, song:"ENTER SANDMAN"');
}
