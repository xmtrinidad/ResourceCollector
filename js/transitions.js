/* eslint-disable */

$navListItem.on('mouseover', function () {
  const $itemHovered = $(this);
  const $activeElement = $navList.find('.list-item--active');
  removeTransition($activeElement, 'list-item--active');
  addTransition($itemHovered, 'list-item--active');
});

$resourcesContainer.on('mouseenter', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  addTransition($closestDescription, 'show_desc');
});

$resourcesContainer.on('mouseleave', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  removeTransition($closestDescription, 'show_desc');
});

$categoriesHeader.on('click', function () {
  toggleTransition($categoriesList, 'dropdown');
});

$categoriesList.on('click', function (e) {
  const $clickedText = $(e.target).text();
  setElementText($categoriesHeader, $clickedText);
  removeTransition($categoriesList, 'dropdown');
});

$removeBtn.on('click', function () {
  $('.resource__remove-btn').toggle();
});
