import * as isWebp from './modules/isWebp.js';
import * as ibg from './modules/ibg.js';
import * as anchors from './modules/anchors.js';
// import * as useDynamicAdapt from './modules/dynamicAdapt.js';
// import * as spoilers from './modules/spoilers.js';

isWebp.isWebp(); // Проверка поддержки webp и добавление класса _webp или _no-webp для HTML
ibg.ibg(); // Фоновое изображение
anchors.anchors(); // Плавный скролл
// useDynamicAdapt.useDynamicAdapt(); // Динамический адаптив
// spoilers.spoilers(); // Спойлеры

import $ from 'jquery';
// import jBox from 'jbox';
// import Swiper, { Navigation, Pagination } from 'swiper';
import { Fancybox } from "@fancyapps/ui";
import mixitup from 'mixitup';

///////////////////////////////////////////////////////////////////////////////////////////////////

// Menu

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__body');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function () {
 body.classList.toggle('lock');
 menu.classList.toggle('active');
 menuBtn.classList.toggle('active');
 overlay.classList.toggle('active');
});

overlay.addEventListener('click', function () {
 body.classList.remove('lock');
 menu.classList.remove('active');
 menuBtn.classList.remove('active');
 overlay.classList.remove('active');
});

links.forEach(function (i) {
 i.addEventListener('click', function () {
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  overlay.classList.remove('active');
 });
});

// Cat filters

const mixer = mixitup('.cat__content', {
 animation: {
  queueLimit: 5,
 }
});
const filters = document.querySelectorAll('.cat__filter');

filters.forEach(function (i) {
 i.addEventListener('click', function () {
  filters.forEach(function (i) {
   i.classList.remove('cat__filter--active');
  });
  this.classList.add('cat__filter--active');
 })
});

// Cat dropdawn

const dropFiltersBtn = document.querySelector('.cat__filter-dropdown');
const dropFiltersBox = document.querySelector('.cat__filter-box');

dropFiltersBtn.addEventListener('click', function () {
 dropFiltersBox.classList.toggle('active');
 dropFiltersBtn.classList.toggle('active');
});

// WORKS FILTER

// const mixerContainer = document.querySelector('.works__top');
// const mixer = mixitup('.works__items');
// const mixBtns = document.querySelectorAll('.works__filter');
// const mixItems = document.querySelectorAll('.works__item');
// const allBtn = document.querySelector('.works__filter--all');

// mixBtns.forEach(function (i) {
//   i.addEventListener('click', function () {
//     mixerContainer.classList.add('active');
//     mixItems.forEach(function (i) {
//       i.classList.add('active');
//     });
//   });
// });

// allBtn.addEventListener('click', function () {
//   mixerContainer.classList.remove('active');
//   mixItems.forEach(function (i) {
//     i.classList.remove('active');
//   });
// });

// MODALS

const allModals = document.querySelectorAll('[data-modal]');
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseBtn = document.querySelectorAll('[data-modal-close]');
const dataModallinks = document.querySelectorAll('[data-modal-link]')

modalButtons.forEach(function (i) {
 i.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.add('lock')
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  allModals.forEach(function (i) {
   i.classList.add('visibility-hidden');
  });
  modal.classList.remove('visibility-hidden');
  overlay.classList.add('active');
  const modalWindow = modal.querySelector('.modal-window');
  modalWindow.addEventListener("click", function (e) {
   e.stopPropagation();
  });
 });
});

modalCloseBtn.forEach(function (i) {
 i.addEventListener("click", function (e) {
  body.classList.remove('lock')
  e.preventDefault();
  const modal = this.closest('[data-modal]');
  modal.classList.add('visibility-hidden');
  overlay.classList.remove('active');
 });
});

overlay.addEventListener("click", function () {
 body.classList.remove('lock')
 allModals.forEach(function (i) {
  i.classList.add('visibility-hidden');
 });
});

document.addEventListener('keydown', function (e) {
 if (e.keyCode === 27) {
  overlay.classList.remove('active');
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  allModals.forEach(function (i) {
   i.classList.add('visibility-hidden');
  });
 };

});