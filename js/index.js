const $navList = $('.mynav__list');
const $navListItem = $('.mynav__list-item');
const $resource = $('.resource');
const $resourceDescription = $('.resource__desc');
const $categoriesHeader = $('.categories-header');
const $categoriesList = $('.categories-list');


function removeTransition(element, transitionClass) {
  element.removeClass(transitionClass);
}

function addTransition(element, transitionClass) {
  element.addClass(transitionClass);
}

function toggleTransition(element, transitionClass) {
  element.toggleClass(transitionClass);
}

function getElementText(element) {
  return element.text();
}

function setElementText(element, text) {
  element.text(text);
}


$navListItem.on('mouseover', function () {
  const $itemHovered = $(this);
  const $activeElement = $navList.find('.list-item--active');
  removeTransition($activeElement, 'list-item--active');
  addTransition($itemHovered, 'list-item--active');
});

$resource.hover(function () {
  const $closestDescription = $(this).find($resourceDescription);
  toggleTransition($closestDescription, 'show_desc');
});

$categoriesHeader.on('click', function (e) {
  
});
