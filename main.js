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
    previewCardContainer.setAttribute('load', 'lazy');

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
    nameH3.addEventListener('click', () => {
      location.hash = `#character=${character.id}`
      getCharacters(character.id);
    })
    const statusAndSpecie = document.createElement('p');
    statusAndSpecie.innerText = `${character.status} - ${character.species}`;

    const lastKnownLocation = document.createElement('h4');
    lastKnownLocation.innerText = 'Last known location:';
    const locationP = document.createElement('p');
    locationP.innerText = character.location.name;
    locationP.addEventListener('click', () => {
      const urlRequired = character.location.url.split('/');
      const urlRequiredID = urlRequired[urlRequired.length - 1];
      location.hash = `#location=${urlRequiredID}`;
      getLocations(urlRequiredID);
    });

    const firstSeenIn = document.createElement('h4');
    firstSeenIn.innerText = 'First seen in:'
    const seenInP = document.createElement('p');
    seenInP.innerText = character.origin.name;
    seenInP.addEventListener('click', () => {
      const urlRequired = character.episode[0].split('/');
      const urlRequiredID = urlRequired[urlRequired.length - 1];
      location.hash = `#episode=${urlRequiredID}`;
      getEpisodes(urlRequiredID);
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

function createLocations (locations, container){
  container.innerHTML = '';
  locations.forEach(locationObj => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');
    previewCardContainer.setAttribute('load', 'lazy');

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
    nameP.addEventListener('click', () => {
      location.hash = `#location=${locationObj.id}`;
      getLocations(locationObj.id);
    });

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

function createEpisodes (episodes, container){
  container.innerHTML = '';
  episodes.forEach(episode => {
    const previewCardContainer = document.createElement('div');
    previewCardContainer.classList.add('preview-card-container');
    previewCardContainer.setAttribute('load', 'lazy');

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
    nameP.addEventListener('click', () => {
      location.hash = `#episode=${episode.id}`;
      getEpisodes(episode.id);
    });

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

function createDetailsCharacter (obj, container){
  container.innerHTML = '';
  
  const detailsImgContainer = document.createElement('div');
  detailsImgContainer.classList.add('details-img-container')
  const detailsImg = document.createElement('img');
  detailsImg.classList.add('details-card-container--character');
  detailsImg.setAttribute('src', obj.image);

  detailsImgContainer.appendChild(detailsImg);

  const detailsDescriptionContainer = document.createElement('div');
  detailsDescriptionContainer.classList.add('details-description-container');

  const nameCharacter = document.createElement('h4');
  nameCharacter.innerText = 'Name:';
  const nameCharacterP = document.createElement('p');
  nameCharacterP.innerText = obj.name;

  const idCharacter = document.createElement('h4');
  idCharacter.innerText = 'Id:'
  const idCharacterP = document.createElement('p');
  idCharacterP.innerText = obj.id;

  const statusCharacter = document.createElement('h4');
  statusCharacter.innerText = 'Status:';
  const statusCharacterP = document.createElement('p');
  statusCharacterP.innerText = obj.status;

  const specieCharacter = document.createElement('h4');
  specieCharacter.innerText = 'Specie:'
  const specieCharacterP = document.createElement('p');
  specieCharacterP.innerText = obj.species;

  const genderCharacter = document.createElement('h4');
  genderCharacter.innerText = 'Gender:'
  const genderCharacterP = document.createElement('p');
  genderCharacterP.innerText = obj.gender;

  const originCharacter = document.createElement('h4');
  originCharacter.innerText = 'Origin:'
  const originCharacterP = document.createElement('p');
  originCharacterP.innerText = obj.origin.name;

  const locationCharacter = document.createElement('h4');
  locationCharacter.innerText = 'Location:'
  const locationCharacterP = document.createElement('p');
  locationCharacterP.innerText = obj.location.name;

  detailsDescriptionContainer.appendChild(nameCharacter);
  detailsDescriptionContainer.appendChild(nameCharacterP);
  detailsDescriptionContainer.appendChild(idCharacter);
  detailsDescriptionContainer.appendChild(idCharacterP);
  detailsDescriptionContainer.appendChild(statusCharacter);
  detailsDescriptionContainer.appendChild(statusCharacterP);
  detailsDescriptionContainer.appendChild(specieCharacter);
  detailsDescriptionContainer.appendChild(specieCharacterP);
  detailsDescriptionContainer.appendChild(genderCharacter);
  detailsDescriptionContainer.appendChild(genderCharacterP);
  detailsDescriptionContainer.appendChild(originCharacter);
  detailsDescriptionContainer.appendChild(originCharacterP);
  detailsDescriptionContainer.appendChild(locationCharacter);
  detailsDescriptionContainer.appendChild(locationCharacterP);

  container.appendChild(detailsImgContainer);
  container.appendChild(detailsDescriptionContainer);
};

function createDetailsLocation (obj, container){
  container.innerHTML = '';
  
  const detailsImgContainer = document.createElement('div');
  detailsImgContainer.classList.add('details-img-container')
  const detailsImg = document.createElement('img');
  detailsImg.classList.add('generic-img');
  detailsImg.setAttribute('src', './rickandmorty.png');

  detailsImgContainer.appendChild(detailsImg);

  const detailsDescriptionContainer = document.createElement('div');
  detailsDescriptionContainer.classList.add('details-description-container');

  const nameLocation = document.createElement('h4');
  nameLocation.innerText = 'Name:';
  const nameLocationP = document.createElement('p');
  nameLocationP.innerText = obj.name;

  const idLocation = document.createElement('h4');
  idLocation.innerText = 'Id:'
  const idLocationP = document.createElement('p');
  idLocationP.innerText = obj.id;

  const locationType = document.createElement('h4');
  locationType.innerText = 'Type:';
  const locationTypeP = document.createElement('p');
  locationTypeP.innerText = obj.type;

  const locationDimension = document.createElement('h4');
  locationDimension.innerText = 'Episode Code:'
  const locationDimensionP = document.createElement('p');
  locationDimensionP.innerText = obj.dimension;

  detailsDescriptionContainer.appendChild(nameLocation);
  detailsDescriptionContainer.appendChild(nameLocationP);
  detailsDescriptionContainer.appendChild(idLocation);
  detailsDescriptionContainer.appendChild(idLocationP);
  detailsDescriptionContainer.appendChild(locationType);
  detailsDescriptionContainer.appendChild(locationTypeP);
  detailsDescriptionContainer.appendChild(locationDimension);
  detailsDescriptionContainer.appendChild(locationDimensionP);  

  container.appendChild(detailsImgContainer);
  container.appendChild(detailsDescriptionContainer);
};

function createDetailsEpisode (obj, container){
  container.innerHTML = '';
  
  const detailsImgContainer = document.createElement('div');
  detailsImgContainer.classList.add('details-img-container');
  const detailsImg = document.createElement('img');
  detailsImg.classList.add('generic-img');
  detailsImg.setAttribute('src', './rickandmorty.png');

  detailsImgContainer.appendChild(detailsImg);

  const detailsDescriptionContainer = document.createElement('div');
  detailsDescriptionContainer.classList.add('details-description-container');

  const nameEpisode = document.createElement('h4');
  nameEpisode.innerText = 'Name:';
  const nameEpisodeP = document.createElement('p');
  nameEpisodeP.innerText = obj.name;

  const idEpisode = document.createElement('h4');
  idEpisode.innerText = 'Id:'
  const idEpisodeP = document.createElement('p');
  idEpisodeP.innerText = obj.id;

  const airDate = document.createElement('h4');
  airDate.innerText = 'Air Date:'
  const airDateP = document.createElement('p');
  airDateP.innerText = obj.air_date;

  const episodeCode = document.createElement('h4');
  episodeCode.innerText = 'Episode Code:'
  const episodeCodeP = document.createElement('p');
  episodeCodeP.innerText = obj.episode;

  detailsDescriptionContainer.appendChild(nameEpisode);
  detailsDescriptionContainer.appendChild(nameEpisodeP);
  detailsDescriptionContainer.appendChild(idEpisode);
  detailsDescriptionContainer.appendChild(idEpisodeP);
  detailsDescriptionContainer.appendChild(airDate);
  detailsDescriptionContainer.appendChild(airDateP);
  detailsDescriptionContainer.appendChild(episodeCode);
  detailsDescriptionContainer.appendChild(episodeCodeP);

  container.appendChild(detailsImgContainer);
  container.appendChild(detailsDescriptionContainer);
};

// API calls
async function getCharacters (id){
  if (location.hash.startsWith('#characters')){
    const { data } = await api('/character');
    const charactersArray = data.results;

    createCharacters(charactersArray, articlePreview);
  } else if (location.hash.startsWith('#character=')){
    const { data } = await api(`/character/${id}`);
    const characterDetail = data;

    createDetailsCharacter(characterDetail, detailsCardContainer);
  }  else {
    const { data } = await api('/character/1,2,3,4,5,6,7,8');
    const charactersArray = data;

    createCharacters(charactersArray, articlePreview);
  }
};

async function getLocations(id){
  if ( location.hash.startsWith('#locations')){
    const { data } = await api('/location');
    const episodesArray = data.results;

    createLocations(episodesArray, articlePreview);
  } else {
  const { data } = await api(`/location/${id}`);
  const locationDetail = data;

    createDetailsLocation(locationDetail, detailsCardContainer);
  };
}

async function getEpisodes(id){
  if (location.hash.startsWith('#episodes')){
    const { data } = await api('/episode');
    const episodesArray = data.results;

    createEpisodes(episodesArray, articlePreview);
  } else {
    const { data } = await api(`/episode/${id}`);
    const episodeDetail = data;

    createDetailsEpisode(episodeDetail, detailsCardContainer);
  };
};