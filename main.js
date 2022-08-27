const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  }
});

function createCharacters (characters, container){
  container.innerHTML = '';
  characters.forEach(character => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');

    const previewImageContainer = document.createElement('div');
    previewImageContainer.classList.add('preview-img-container');
    const previewImage = document.createElement('img');
    previewImage.setAttribute('src', `${character.image}`);

    previewImageContainer.appendChild(previewImage);

    const previewDescriptionContainer = document.createElement('div');
    previewDescriptionContainer.classList.add('preview-description-container');

    const nameH3 = document.createElement('h3');
    nameH3.innerText = character.name;
    const statusAndSpecie = document.createElement('p');
    statusAndSpecie.innerText = `${character.status} - ${character.species}`;

    const lastKnownLocation = document.createElement('h4');
    lastKnownLocation.innerText = 'Last known location:';
    const locationP = document.createElement('p');
    locationP.innerText = character.location.name;

    const firstSeenIn = document.createElement('h4');
    firstSeenIn.innerText = 'First seen in:'
    const seenInP = document.createElement('p');
    seenInP.innerText = character.origin.name;

    previewDescriptionContainer.appendChild(nameH3);
    previewDescriptionContainer.appendChild(statusAndSpecie);
    previewDescriptionContainer.appendChild(lastKnownLocation);
    previewDescriptionContainer.appendChild(locationP);
    previewDescriptionContainer.appendChild(firstSeenIn);
    previewDescriptionContainer.appendChild(seenInP);

    previewCardContainer.appendChild(previewImageContainer);
    previewCardContainer.appendChild(previewDescriptionContainer);

    container.appendChild(previewCardContainer);
  });
}

async function getCharacters (){
  const { data } = await api('/character/1,2,3,4,5,6');
  const charactersArray = data;

  createCharacters(charactersArray, articlePreview);
}
getCharacters()