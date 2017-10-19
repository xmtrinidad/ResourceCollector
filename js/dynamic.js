/* eslint-disable */

/**
 * Add categories to drop down menu
 * on main page
 */
function getCategories() {
    const resObj = unpackLocalStorage('resObj');
    Object.keys(resObj).forEach((category) => {
        $categoriesList.append(
            `<li class="categories-list__category">${category}</li>`
        );
    });
}

/**
 * Get categories from local storage object
 * And append to dropdown in add resource page
 */
function getCategoryList() {
    const resObj = JSON.parse(localStorage.getItem('resObj'));
    console.log(resObj);
    if (Object.keys(resObj) === null) {
      return;
    }
    Object.keys(resObj).forEach((category) => {
      if (category !== '') {
        $formCategoryList.append(
          `<option value="${category}">${category}</option>`
        );
      }
    });
  }


/**
 * Filters categories from selected category
 * in the drop down menu
 * @param {String} category - the category to filter
 */
function filterResources(category) {
    const resources = unpackLocalStorage('resObj')
    const objArr = resources[category];
    $resourcesContainer.empty();
    for (let i = 0; i < objArr.length; i++) {
        appendResources(objArr[i]);
    }
}

/**
 * Display all resources from local storage
 */
function showAllResources() {
    const resources = unpackLocalStorage('resObj')
    $resourcesContainer.empty();
    for (let i = 0; i < Object.keys(resources).length; i++) {
        Object.values(resources)[i].forEach((resource) => {
            appendResources(resource);
        });
    }
}

/**
 * Generates the dynamic HTML to append to
 * the $resourcesContainer
 * @param {Object} obj - the object passed in
 */
function appendResources(obj) {
    $resourcesContainer.append(
        `
        <!-- Resource -->
        <div id="${obj.id}" class="resource">
            <div class="resource__img-container">
                <img class="resource__img img-fluid" src="${obj.img}" alt="card-img">
                <span class="resource__category-label">${obj.category}</span>
            </div>
            <h4 class="resource__title">
                <a href="${obj.link}" class="resource__title-link">
                    ${obj.title}
                </a>
            </h4>
            <ul class="resource__desc">
    
            </ul>
            <button class="btn btn-primary resource__remove-btn">Remove</button>
        </div>
        <!-- Resource -->
        `);
    obj.keyPoints.forEach((point) => {
        $resourcesContainer.children().last().find('.resource__desc').append(`<li>${point}</li>`);
    });
}