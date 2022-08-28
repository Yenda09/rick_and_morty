window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

charactersLink.addEventListener('click', () => location.hash = '#characters');
episodesLink.addEventListener('click', () => location.hash = '#episodes');
locationsLink.addEventListener('click', () => location.hash = '#locations');

backArrow.addEventListener('click', () => window.history.back());

function navigator (){
  if (location.hash.startsWith('#characters')){
    charactersPage();
    return;
  } else if (location.hash.startsWith('#character=')){
    characterDetailPage();
    return;
  } else if (location.hash.startsWith('#episodes')){
    episodesPage();
    return;
  } else if (location.hash.startsWith('#episode=')){
    episodeDetailPage();
    return;
  }else if (location.hash.startsWith('#locations')){
    locationsPage();
    return;
  } else if (location.hash.startsWith('#location=')){
    locationDetailPage();
    return;
  } else {
    homePage();
    return;
  }
};

function loadPreviewPages (){
  mainTitleSection.classList.add('inactive');
  genericTitleSection.classList.remove('inactive');
  articlePreview.classList.remove('inactive');
  articleDetails.classList.add('inactive');
}

function loadDetailsPages (){
  mainTitleSection.classList.add('inactive');
  genericTitleSection.classList.remove('inactive');
  articlePreview.classList.add('inactive');
  articleDetails.classList.remove('inactive');
}

function homePage (){
  mainTitleSection.classList.remove('inactive');
  genericTitleSection.classList.add('inactive');
  articlePreview.classList.remove('inactive');
  articleDetails.classList.add('inactive');
  getCharacters();
};

function charactersPage (){
  genericTitle.innerText = 'Characters';
  loadPreviewPages();
  getCharacters();
};

function characterDetailPage (){
  loadDetailsPages();
};

function episodesPage (){
  genericTitle.innerText = 'Episodes';
  loadPreviewPages();
  getEpisodes();
};

function episodeDetailPage (){
  loadDetailsPages();
}

function locationsPage (){
  genericTitle.innerText = 'Locations';
  loadPreviewPages();
  getLocations();
};

function locationDetailPage (){
  loadDetailsPages();
};