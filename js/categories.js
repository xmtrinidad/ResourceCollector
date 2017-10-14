/* eslint-disable */

// localStorage.removeItem('newCategories');

function addCategoriesOnLoad() {
    const getLocal = localStorage.getItem('newCategories');
    const categoriesArr = JSON.parse(getLocal);
    categoriesArr.forEach((category) => {
        $categoriesList.append(
            `<li class="categories-list__category">${category}</li>`
        );
    });
}

addCategoriesOnLoad();