
/**
 * Remove parent element
 * @param {Element} ele - the element
 */
function removeParent(ele) {
  ele.parent().remove();
}

/**
 * Remove an item in an array from any index
 */
function removeFromArr(arr, item) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
}

function removeTransition(element, transitionClass) {
  element.removeClass(transitionClass);
}

function addTransition(element, transitionClass) {
  element.addClass(transitionClass);
}

function toggleTransition(element, transitionClass) {
  element.toggleClass(transitionClass);
}

function setElementText(element, text) {
  element.text(text);
}

function resetLocalStorage() {
  localStorage.clear();
}

function removeLocalStorageItem(item) {
  localStorage.removeItem(item);
}

/**
 * For local storage -- check if resource array and
 * new categories array already exist to prevent a 
 * new array from being initialized on page load
 */
function checkIfNull() {
  if (localStorage.getItem('resObj', JSON.stringify({})) === null) {
    localStorage.setItem('resObj', JSON.stringify({}));
    localStorage.setItem('index', JSON.stringify(-1));
  }
}
/**
 * Checks if local storage keys are empty
 */
function checkIfKeyEmpty() {
  const resObj = unpackLocalStorage('resObj');
  Object.keys(resObj).forEach((key) => {
    if (resObj[key].length === 0) {
      delete resObj[key];
    }
  });
  localStorage.setItem('resObj', JSON.stringify(resObj));
}


/**
 * Check if there are resources, if not, 
 * display landing message
 */
function checkIfResources() {
  if (localStorage.getItem('resObj') === '{}') {
    $('.toolbar').hide();
  } else {
    $('.about').hide();
  }
}

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
 * Filter function taken from Stack overflow
 * https://stackoverflow.com/questions/1772035/filtering-a-list-as-you-type-with-jquery
 */
function filter(text) {
  $('.resources > .resource').each(function() {
    const match = $(this).text().replace(/\s/g, '').toLowerCase();
    if (match.search(text) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}