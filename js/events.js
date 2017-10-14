/* eslint-disable */


/**
 * Hover effect for nav
 */
$navListItem.on('mouseover', function () {
  const $itemHovered = $(this);
  const $activeElement = $navList.find('.list-item--active');
  removeTransition($activeElement, 'list-item--active');
  addTransition($itemHovered, 'list-item--active');
});

$resourceSubmit.on('click', function () {
  makeNewResource();
});

/**
 * Slidedown key points on mouse enter
 */
$resourcesContainer.on('mouseenter', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  addTransition($closestDescription, 'show_desc');
});

/**
 * Slideup key pointso n mouse leave
 */
$resourcesContainer.on('mouseleave', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  removeTransition($closestDescription, 'show_desc');
});

/**
 * Toggle categories drop down on click
 */
$categoriesHeader.on('click', function () {
  toggleTransition($categoriesList, 'dropdown');
});

/**
 * Replace dropdown element text on click
 */
$categoriesList.on('click', function (e) {
  const $clickedText = $(e.target).text();
  setElementText($categoriesHeader, $clickedText);
  removeTransition($categoriesList, 'dropdown');
});

/**
 * Toggle remove resources button
 */
$removeBtn.on('click', function () {
  $('.resource__remove-btn').toggle();
});

/**
 * Remove individual resources from the DOM
 * And from local storage
 */
$resourcesContainer.on('click', '.resource__remove-btn', function () {
  removeParent($(this));
  const resTitle = $(this).parent().find('.resource__title-link').text()
    .trim();
  let resItems = unpackLocalStorage('resArr');
  resItems = resItems.filter(obj => obj.title !== resTitle);
  localStorage.setItem('resArr', JSON.stringify(resItems));
});

/**
 * Hide/show add cateogry based on selection
 */
$formCategoryList.on('change', function () {
  const $selected = $(this).val();
  if ($selected === 'new') {
    $formNewCategory.show();
  } else {
    $formNewCategory.hide();
  }
});
