const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  }
});

function createCharacters (){
  
}

async function getCharacters (){
  const { data } = await api('/character');
  const charactersArray = data.results;

  createCharacters();
}
getCharacters()