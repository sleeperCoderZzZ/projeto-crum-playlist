const listElement = document.querySelector('#playlist-list');
const emptyState = document.querySelector('#empty-state');
const resultCount = document.querySelector('#result-count');
const searchForm = document.querySelector('#search-form');
const searchFields = {
  artista: document.querySelector('#artist-search'),
  genero: document.querySelector('#genre-search'),
  titulo: document.querySelector('#title-search')
};

let musicas = [];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function renderSongs(songs) {
  listElement.innerHTML = songs.map((song) => `
    <tr>
      <td>${song.artista}</td>
      <td>${song.genero}</td>
      <td>${song.titulo}</td>
    </tr>
  `).join('');

  if (emptyState) {
    emptyState.hidden = songs.length > 0;
  }

  if (resultCount) {
    resultCount.textContent = `${songs.length} ${songs.length === 1 ? 'faixa' : 'faixas'}`;
  }
}

function filterSongs() {
  const filters = Object.fromEntries(
    Object.entries(searchFields).map(([field, input]) => [field, normalize(input.value.trim())])
  );

  const filteredSongs = musicas.filter((song) => (
    Object.entries(filters).every(([field, value]) => (
      !value || normalize(song[field]).includes(value)
    ))
  ));

  renderSongs(filteredSongs);
}

async function loadSongs() {
  try {
    const response = await fetch('./data/musicas.json');
    if (!response.ok) {
      throw new Error('Não foi possível carregar as músicas.');
    }

    musicas = await response.json();
    renderSongs(musicas);
  } catch (error) {
    if (resultCount) {
      resultCount.textContent = 'Erro ao carregar';
    }

    if (emptyState) {
      emptyState.hidden = false;
      emptyState.textContent = 'Não foi possível carregar a playlist agora.';
    }
  }
}

Object.values(searchFields).forEach((input) => {
  input.addEventListener('input', filterSongs);
});

searchForm.addEventListener('reset', () => {
  window.setTimeout(filterSongs);
});

document.querySelector('button-default[type="reset"]').addEventListener('click', (event) => {
  event.preventDefault();
  searchForm.reset();
  filterSongs();
});

loadSongs();
