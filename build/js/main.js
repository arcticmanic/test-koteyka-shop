'use strict';

/* Sort reveal */

const elementList = document.querySelectorAll('.catalog-item-button');
const buttonsSort = document.querySelectorAll('.sort__button');
const blockSort = document.querySelectorAll('.js-sort')[0];

buttonsSort.forEach((button) => {
  button.addEventListener('click', () => {
    showBlockSort();
  }, false);
})

function showBlockSort() {
  if (blockSort) {
    blockSort.classList.toggle('sort--hidden');
  }
}

/* Filter */

const filterForm = document.querySelectorAll('.filter__form')[0];
const filterInputs = filterForm.querySelectorAll('.filter__input');
const filterCheckboxes = filterForm.querySelectorAll('.filter__checkbox input');
const filterReset = document.querySelectorAll('.filter__button[type="reset"]')[0];

function toggleFilterReset() {
  if (filterReset.classList.contains('filter__button--hidden')) {
    filterReset.classList.remove('filter__button--hidden');
  } else {
    filterReset.classList.add('filter__button--hidden');
  }
}

filterForm.onchange = () => {
  filterReset.classList.remove('filter__button--hidden');
}

/* Sort */

const areaSortUp = document.querySelectorAll('.js-sort-area-up')[0];
const areaSortDown = document.querySelectorAll('.js-sort-area-down')[0];
const priceSortUp = document.querySelectorAll('.js-sort-price-up')[0];
const priceSortDown = document.querySelectorAll('.js-sort-price-down')[0];
const containerSort = document.querySelector('.page-catalog__list');
const cards = document.querySelectorAll('.card');
let sortArray = [...cards];

areaSortUp.onclick = () => {
  sortArray.sort(function (a, b) {
    let elA = parseFloat(a.querySelector('span[data-sort="area"]').textContent.replace(/,/g, '.'));
    let elB = parseFloat(b.querySelector('span[data-sort="area"]').textContent.replace(/,/g, '.'));

    return elA - elB;
  });

  sortArray.forEach(function (item) {
    containerSort.appendChild(item);
  });
}

areaSortDown.onclick = () => {
  sortArray.sort(function (a, b) {
    let elA = parseFloat(a.querySelector('span[data-sort="area"]').textContent.replace(/,/g, '.'));
    let elB = parseFloat(b.querySelector('span[data-sort="area"]').textContent.replace(/,/g, '.'));

    return elB - elA;
  });

  sortArray.forEach(function (item) {
    containerSort.appendChild(item);
  });
}

priceSortUp.onclick = () => {
  sortArray.sort(function (a, b) {
    let elA = parseFloat(a.querySelector('span[data-sort="price"]').textContent.replace(/,/g, '.'));
    let elB = parseFloat(b.querySelector('span[data-sort="price"]').textContent.replace(/,/g, '.'));

    return elA - elB;
  });

  sortArray.forEach(function (item) {
    containerSort.appendChild(item);
  });
}

priceSortDown.onclick = () => {
  sortArray.sort(function (a, b) {
    let elA = parseFloat(a.querySelector('span[data-sort="price"]').textContent.replace(/,/g, '.'));
    let elB = parseFloat(b.querySelector('span[data-sort="price"]').textContent.replace(/,/g, '.'));

    return elB - elA;
  });

  sortArray.forEach(function (item) {
    containerSort.appendChild(item);
  });
}

