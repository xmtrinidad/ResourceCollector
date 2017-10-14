/* eslint-disable */

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

/**
 * For local storage -- check if resource array
 * already exist to prevent a new array from being
 * initialized on page load
 */
function checkIfNull() {
  if (localStorage.getItem('resArr', JSON.stringify([])) === null) {
    localStorage.setItem('resArr', JSON.stringify([]));
  }
}

/**
 * get resources from local storage
 */
function getResources() {
  checkIfNull();
  const resources = localStorage.getItem('resArr');
  const parsedResources = JSON.parse(resources);
  parsedResources.forEach((resource) => {
    $resourcesContainer.append(`
      <!-- Resource -->
      <div class="resource">
          <div class="resource__img-container">
              <img class="resource__img img-fluid" src="${resource.img}" alt="card-img">
              <span class="resource__category-label">${resource.category}</span>
          </div>
          <h4 class="resource__title">
              <a href="${resource.link}" class="resource__title-link">
                  ${resource.title}
              </a>
          </h4>
          <ul class="resource__desc">
  
          </ul>
          <button class="btn btn-primary resource__remove-btn">Remove</button>
      </div>
      <!-- Resource -->
      `);
    resource.keyPoints.forEach((point) => {
      $resourcesContainer.children().last().find('.resource__desc').append(`<li>${point}</li>`);
    });
  });
}

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