// /* eslint-disable */
checkIfNull();
getResources();

$resourcesContainer.on('click', '.resource__remove-btn', function () {
  removeParent($(this));
  const resTitle = $(this).parent().find('.resource__title-link').text()
    .trim();
  let resItems = unpackLocalStorage('resArr');
  resItems = resItems.filter(obj => obj.title !== resTitle);
  localStorage.setItem('resArr', JSON.stringify(resItems));
});
