/* eslint-disable */

function getCategories() {
    const resArr = unpackLocalStorage('resArr');
    Object.keys(resArr).forEach((category) => {
        $categoriesList.append(
            `<li class="categories-list__category">${category}</li>`
        );
    });
}

/**
 * get resources from local storage and
 * append to resources container
 */

function getResources() {
    checkIfNull();
    const resources = unpackLocalStorage('resArr');
    showAllResources(resources);
}
function showAllResources(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        Object.values(obj)[i].forEach((resource) => {
            $resourcesContainer.append(`
              <!-- Resource -->
              <div id="${resource.id}" class="resource">
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
}