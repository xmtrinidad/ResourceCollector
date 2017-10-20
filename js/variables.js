/* eslint-disable */

const $removeAllBox = $('.mynav__remove-all');
const $dots = $('.mynav__header-dots');
const $removeAllBtn = $('.mynav__remove_btn');
const $nevermindBtn = $('.mynav__nevermind_btn');

const $navList = $('.mynav__list');
const $navListItem = $('.mynav__list-item');
const $removeBtn = $('.remove_btn');
const $resourcesContainer = $('.resources');
const $resource = $('.resource');

const $resourceDescription = $('.resource__desc');
const $categoriesHeader = $('.categories-header');
const $categoriesList = $('.categories-list');
const $addCategoryBtn = $('.add-category-btn');

const $formCategoryList = $('.form__field-category');
const $formNewCategory = $('.form__field-new');
const $resourceTitle = $('#resource_title');
const $resourceLink = $('#resource_link');
const $resourceCategory = $('#resource_category');
const $resourceNew = $('#resource_new');
const $resourceKeyPoints = $('.form__field-point');
const $resourceSubmit = $('#resource_submit');

let isNewResource = false;
let removeClicked = false;

const RANDOM_IMAGES = [
    'https://images.unsplash.com/photo-1485815457792-d1a966f9bde0?w=1050',
    'https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?w=1050',
    'https://images.unsplash.com/photo-1504730668753-bea25cfb2d0e?w=967',
    'https://images.unsplash.com/photo-1503681355143-d5485eea7f14?w=1050',
    'https://images.unsplash.com/photo-1482360701650-fcb3869e664b?w=1350',
    'https://images.unsplash.com/photo-1471874622662-3fe52245b2f3?w=1350',
    'https://source.unsplash.com/collection/488'
];