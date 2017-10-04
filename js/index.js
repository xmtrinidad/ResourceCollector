const $navList = $('.mynav__list');
const $navListItem = $('.mynav__list-item');
const $resource = $('.resource');
const $resourceDescription = $('.resource__desc');

function removeTransition(element, transitionClass) {
  element.removeClass(transitionClass);
}

function addTransition(element, transitionClass) {
  element.addClass(transitionClass);
}

function toggleTransition(element, transitionClass) {
  element.toggleClass(transitionClass);
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
