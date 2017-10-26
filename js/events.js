
$dots.on('click', function () {
  toggleTransition($removeAllBox, 'show_warn');
  
});

$nevermindBtn.on('click', function () {
  removeTransition($removeAllBox, 'show_warn');
});

$removeAllBtn.on('click', function () {
  localStorage.clear();
  parent.location.reload(true);
});

/**
 * Hover effect for nav
 */
$navListItem.on('mouseover', function () {
  const $itemHovered = $(this);
  const $activeElement = $navList.find('.list-item--active');
  removeTransition($activeElement, 'list-item--active');
  addTransition($itemHovered, 'list-item--active');
});

$resourceSubmit.on('click', function (e) {
  if (checkForm()) {
    e.preventDefault();
    return;
  }
  makeNewResource();
});

/**
 * Slidedown key points on mouse enter
 */
$resourcesContainer.on('mouseenter', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  if (removeClicked) {
    return;
  }
  addTransition($closestDescription, 'show_desc');
});

/**
 * Slideup key points on mouse leave
 */
$resourcesContainer.on('mouseleave', '.resource', function () {
  const $closestDescription = $(this).find('ul');
  if (removeClicked) {
    return;
  }
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
  const $clickedText = $(e.target).text().trim();
  setElementText($categoriesHeader, $clickedText.toUpperCase());
  removeTransition($categoriesList, 'dropdown');
  if ($clickedText === 'Show All') {
    showAllResources();
  } else {
    filterResources($clickedText);
  }
});

/**
 * Toggle remove resources button
 */
$removeBtn.on('click', function () {
  removeClicked = removeClicked !== true;
  if (removeClicked) {
    addTransition($('.resource__desc'), 'show_desc')
  } else {
    removeTransition($('.resource__desc'), 'show_desc');
  }
  $('.resource__remove-btn').toggle();
});

/**
 * Remove individual resources from the DOM
 * And from local storage
 */
$resourcesContainer.on('click', '.resource__remove-btn', function () {
  removeParent($(this));
  const resCategory = $(this).parent().find('.resource__category-label').text();
  const resId = Number($(this).parent().attr('id'));

  let resItems = unpackLocalStorage('resObj');
  const resCatArr = resItems[resCategory];
  const obj = resCatArr.find(obj => obj.id === resId);
  removeFromArr(resCatArr, obj);
  localStorage.setItem('resObj', JSON.stringify(resItems));
});

/**
 * Toggle add category
 */
$addCategoryBtn.on('click', function () {
  isNewResource = isNewResource !== true;
  $formNewCategory.toggle();
});



/**
 * Search input that filters resources
 */
$('.search__input').on('keyup', function(){
  const text = $(this).val().toLowerCase();
  filter(text);
});
