const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  }
});
// Utils
function createCharacters (characters, container){
  container.innerHTML = '';
  characters.forEach(character => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');

    const previewImageContainer = document.createElement('div');
    previewImageContainer.classList.add('preview-img-container');
    const previewImage = document.createElement('img');
    previewImage.classList.add('preview-img');
    previewImage.setAttribute('src', `${character.image}`);

    previewImageContainer.appendChild(previewImage);

    const previewDescriptionContainer = document.createElement('div');
    previewDescriptionContainer.classList.add('preview-description-container');

    const nameH3 = document.createElement('h3');
    nameH3.innerText = character.name;
    nameH3.addEventListener('click', () => location.hash = `#character=${character.id}`)
    const statusAndSpecie = document.createElement('p');
    statusAndSpecie.innerText = `${character.status} - ${character.species}`;

    const lastKnownLocation = document.createElement('h4');
    lastKnownLocation.innerText = 'Last known location:';
    const locationP = document.createElement('p');
    locationP.innerText = character.location.name;
    locationP.addEventListener('click', () => {
      getLocation(`${character.location.url}`);
      location.hash = `#locationDetail`;
    });

    const firstSeenIn = document.createElement('h4');
    firstSeenIn.innerText = 'First seen in:'
    const seenInP = document.createElement('p');
    seenInP.innerText = character.origin.name;
    seenInP.addEventListener('click', () => {
      getEpisode(`${character.location.url}`);
      location.hash = `#locationDetail`;
    });

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
};

function createEpisodes (episodes, container){
  container.innerHTML = '';
  episodes.forEach(episode => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');

    const previewImageContainer = document.createElement('div');
    previewImageContainer.classList.add('preview-img-container');
    const genericLogo = document.createElement('img');
    genericLogo.classList.add('generic-logo');
    genericLogo.setAttribute('src', './rickandmorty.png');

    previewImageContainer.appendChild(genericLogo);

    const previewDescriptionContainer = document.createElement('div');
    previewDescriptionContainer.classList.add('preview-description-container');

    const nameH4 = document.createElement('h4');
    nameH4.innerText = 'Name';
    const nameP = document.createElement('p');
    nameP.innerText = episode.name;
    nameP.addEventListener('click', () => location.hash = `#episode=${episode.id}`);

    const airDate = document.createElement('h4');
    airDate.innerText = 'Air date:';
    const airDateP = document.createElement('p');
    airDateP.innerText = episode.air_date;

    previewDescriptionContainer.appendChild(nameH4);
    previewDescriptionContainer.appendChild(nameP);
    previewDescriptionContainer.appendChild(airDate);
    previewDescriptionContainer.appendChild(airDateP);

    previewCardContainer.appendChild(previewImageContainer);
    previewCardContainer.appendChild(previewDescriptionContainer);

    container.appendChild(previewCardContainer);
  });
};

function createLocations (locations, container){
  container.innerHTML = '';
  locations.forEach(locationObj => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');

    const previewImageContainer = document.createElement('div');
    previewImageContainer.classList.add('preview-img-container');
    const genericLogo = document.createElement('img');
    genericLogo.classList.add('generic-logo');
    genericLogo.setAttribute('src', './rickandmorty.png');

    previewImageContainer.appendChild(genericLogo);

    const previewDescriptionContainer = document.createElement('div');
    previewDescriptionContainer.classList.add('preview-description-container');

    const nameH4 = document.createElement('h4');
    nameH4.innerText = 'Name';
    const nameP = document.createElement('p');
    nameP.innerText = locationObj.name;
    nameP.addEventListener('click', () => location.hash = `#location=${locationObj.id}`);

    const typeLocation = document.createElement('h4');
    typeLocation.innerText = 'Type:';
    const typeLocationP = document.createElement('p');
    typeLocationP.innerText = locationObj.type;

    const dimension = document.createElement('h4');
    dimension.innerText = 'Dimension:';
    const dimensionP = document.createElement('p');
    dimensionP.innerText = locationObj.dimension;

    previewDescriptionContainer.appendChild(nameH4);
    previewDescriptionContainer.appendChild(nameP);
    previewDescriptionContainer.appendChild(typeLocation);
    previewDescriptionContainer.appendChild(typeLocationP);
    previewDescriptionContainer.appendChild(dimension);
    previewDescriptionContainer.appendChild(dimensionP);

    previewCardContainer.appendChild(previewImageContainer);
    previewCardContainer.appendChild(previewDescriptionContainer);

    container.appendChild(previewCardContainer);
  });
};

// API calls
async function getCharacters (){
  if (location.hash.startsWith('#characters')){
    const { data } = await api('/character');
    const charactersArray = data.results;

    createCharacters(charactersArray, articlePreview);
  } else {
    const { data } = await api('/character/1,2,3,4,5,6');
    const charactersArray = data;

    createCharacters(charactersArray, articlePreview);
  }
};

async function getEpisodes(){
  const { data } = await api('/episode');
  const episodesArray = data.results;

  createEpisodes(episodesArray, articlePreview);
};

async function getLocations(){
  const { data } = await api('/location');
  const episodesArray = data.results;

  createLocations(episodesArray, articlePreview);
};