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


/**
 * convert a local reference JSON into an object
 * @param {String} localRef - the name of the local storage reference
 */
function unpackLocalStorage(localRef) {
  const local = localStorage.getItem(localRef);
  const unpacked = JSON.parse(local);
  return unpacked;
}

/**
 * Remove parent element
 * @param {Element} ele - the element
 */
function removeParent(ele) {
  ele.parent().remove();
}
