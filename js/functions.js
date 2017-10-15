/* eslint-disable */

/**
 * Remove parent element
 * @param {Element} ele - the element
 */
function removeParent(ele) {
  ele.parent().remove();
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
  if (localStorage.getItem('resArr', JSON.stringify({})) === null) {
    localStorage.setItem('resArr', JSON.stringify({}));
  }
}

/**
 * Check if there are resources, if not, 
 * display landing message
 */
localStorage.clear();
function checkIfResources() {
  if (Object.keys(unpackLocalStorage('resArr')).length === 0) {
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