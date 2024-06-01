// логіка роботи додатка

/* ----------- iziToast ----------- */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* --------- Function import --------- */

import { getImage } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

/* ------------------------------ */

const form = document.querySelector('.search-form');
form.addEventListener('submit', searchImg);
const gallery = document.querySelector('.gallery-list');
const input = form.querySelector('.search-input');

function searchImg(event) {
  event.preventDefault();
  let query = event.target.elements.search.value;

  getImage(query)
    .then(data => {
      console.log(data);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      event.target.elements.search.value = '';
    })
    .catch(error => {
      console.log(error);
    });
}
//   title: 'Hey',
//   message: `The ${query} is beautiful`,
// });
