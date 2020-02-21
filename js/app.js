document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleFormSubmit = function (event){
  event.preventDefault();

  const trackListItem = createTrackListItem(event.target);
  const trackList = document.querySelector('#track-list');
  trackList.appendChild(trackListItem);

  event.target.reset();
}
