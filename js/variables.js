/* eslint-disable */

const $navList = $('.mynav__list');
const $navListItem = $('.mynav__list-item');
const $removeBtn = $('.remove_btn');
const $resourcesContainer = $('.resources');
const $resource = $('.resource');

const $resourceDescription = $('.resource__desc');
const $categoriesHeader = $('.categories-header');
const $categoriesList = $('.categories-list');


const $formCategoryList = $('.form__field-category');
const $formNewCategory = $('.form__field-new');
const $resourceTitle = $('#resource_title');
const $resourceLink = $('#resource_link');
const $resourceCategory = $('#resource_category');
const $resourceNew = $('#resource_new');
const $resourceKeyPoints = $('.form__field-point');
const $resourceSubmit = $('#resource_submit');

const CATEGORIES = {
  html: 'http://www.rouzell.net/wp-content/uploads/2016/01/html_css.png',
  javascript: 'https://www.vectorlogo.zone/logos/javascript/javascript-card.png',
  angular: 'https://www.quobis.com/wp-content/uploads/2017/07/angular-card.png',
  stock: [
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?dpr=1&auto=format&fit=crop&w=1500&h=&q=60&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?dpr=1&auto=format&fit=crop&w=1500&h=&q=60&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?dpr=1&auto=format&fit=crop&w=1504&h=&q=60&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=1500&h=&q=60&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1499957430036-41954fa8391d?dpr=1&auto=format&fit=crop&w=1500&h=&q=60&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1477238134895-98438ad85c30?dpr=1&auto=format&fit=crop&w=1500&h=&q=60&cs=tinysrgb&crop='
  ]
}

