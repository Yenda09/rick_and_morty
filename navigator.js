window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

navLogo.addEventListener('click', () => location.hash = '#home');

charactersLink.addEventListener('click', () => location.hash = '#characters');
episodesLink.addEventListener('click', () => location.hash = '#episodes');
locationsLink.addEventListener('click', () => location.hash = '#locations');

backArrow.addEventListener('click', () => window.history.back());

function navigator (){
  if (location.hash.startsWith('#characters')){
    charactersPage();
  } else if (location.hash.startsWith('#character=')){
    characterDetailPage();
  } else if (location.hash.startsWith('#episodes')){
    episodesPage();
  } else if (location.hash.startsWith('#episode=')){
    episodeDetailPage();
  }else if (location.hash.startsWith('#locations')){
    locationsPage();
  } else if (location.hash.startsWith('#location=')){
    locationDetailPage();
  } else {
    homePage();
  };

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Utils
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

// Loading Pages
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
  genericTitle.innerText = 'Character';
  loadDetailsPages();
};

function episodesPage (){
  genericTitle.innerText = 'Episodes';
  loadPreviewPages();
  getEpisodes();
};

function episodeDetailPage (){
  genericTitle.innerText = 'Episode';
  loadDetailsPages();
}

function locationsPage (){
  genericTitle.innerText = 'Locations';
  loadPreviewPages();
  getLocations();
};

function locationDetailPage (){
  genericTitle.innerText = 'Location';
  loadDetailsPages();
};