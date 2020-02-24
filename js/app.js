document.addEventListener('DOMContentLoaded', () => {
  const formItem = document.querySelector('#form-item');
  formItem.addEventListener('submit', handleFormItemSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleFormItemSubmit = function(event) {
  event.preventDefault();

  const trackListItem = createTrackListItem(event.target);
  const trackList = document.querySelector('#track-list');
  trackList.appendChild(trackListItem);

  event.target.reset();
}

 const createTrackListItem = function (form) {
  const trackListItem = document.createElement('li');
  trackListItem.classList.add('track-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  trackListItem.appendChild(title);

  const artist = document.createElement('h3');
  artist.textContent = form.artist.value;
  trackListItem.appendChild(artist);

  const genre = document.createElement('h3');
  genre.textContent = form.genre.value;
  trackListItem.appendChild(genre);

  return trackListItem;
}
