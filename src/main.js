// логіка роботи додатка

/* ----------- iziToast ----------- */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ------------------------------- */

import { getImage } from './js/pixabay-api';

const form = document.querySelector('.search-form');

form.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();
  console.log('boo');
  const query = event.target.elements.search.value;

  getImage(query).then(data => {
    iziToast.show({
      title: 'Hey',
      message: `The ${query} is beautiful`,
    });
  });
}
