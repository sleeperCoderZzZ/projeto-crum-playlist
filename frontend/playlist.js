const listaMusica = document.querySelector('#lista-playlist');
const estadoVazio = document.querySelector('#estado-vazio');
const resultadoContagem = document.querySelector('#resultado-contagem');
const pesquisa = document.querySelector('#busca');
const camposPesquisa = {
  artista: document.querySelector('#busca-artista'),
  genero: document.querySelector('#busca-genero'),
  titulo: document.querySelector('#busca-titulo')
};

let musicas = [];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function renderizarMusicas(musicas) {
  listaMusica.innerHTML = musicas.map((musica) => `
    <tr>
      <td><img src="${musica.pathImg}" alt="${musica.titulo}" width="50" height="50"></td>
      <td>${musica.artista}</td>
      <td>${musica.genero}</td>
      <td>${musica.titulo}</td>
    </tr>
  `).join('');

  if (estadoVazio) {
    estadoVazio.hidden = musicas.length > 0;
  }

  if (resultadoContagem) {
    resultadoContagem.textContent = `${musicas.length} ${musicas.length === 1 ? 'faixa' : 'faixas'}`;
  }
}

function filtrarMusica() {
  const filtros = Object.fromEntries(
    Object.entries(camposPesquisa).map(([field, input]) => [field, normalize(input.value.trim())])
  );

  const musicasFiltradas = musicas.filter((musica) => (
    Object.entries(filtros).every(([field, value]) => (
      !value || normalize(musica[field]).includes(value)
    ))
  ));

  renderizarMusicas(musicasFiltradas  );
}

async function carregarMusicas() {
  try {
    const musicsResponse = await fetch('./data/musicas.json');
    if (!musicsResponse.ok) {
      throw new Error('Não foi possível carregar as músicas.');
    }

    musicas = await musicsResponse.json();
    renderizarMusicas(musicas);
  } catch (error) {
    if (resultadoContagem) {
      resultadoContagem.textContent = 'Erro ao carregar';
    }

    if (estadoVazio) {
      estadoVazio.hidden = false;
      estadoVazio.textContent = 'Não foi possível carregar a playlist agora.';
    }
  }
}

Object.values(camposPesquisa).forEach((input) => {
  input.addEventListener('input', filtrarMusica);
});

pesquisa.addEventListener('reset', () => {
  window.setTimeout(filtrarMusica);
});

document.querySelector('button-default[type="reset"]').addEventListener('click', (event) => {
  event.preventDefault();
  pesquisa.reset();
  filtrarMusica();
});

carregarMusicas();
