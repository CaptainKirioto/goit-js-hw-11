// логіка роботи додатка

/* ----------- iziToast ----------- */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* --------- Function import --------- */

import { getImage } from './js/pixabay-api';
import { createMarkup, lightboxImg } from './js/render-functions';

/* ------------------------------ */

const form = document.querySelector('.search-form');
form.addEventListener('submit', searchImg);
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.visibility = 'visible';
}
function hideLoader() {
  loader.style.visibility = 'hidden';
}

hideLoader();

function searchImg(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  let query = event.target.elements.search.value.trim();
  if (!query) {
    return iziToast.show({
      message: "You can't do that here",
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
    });
  }
  if (query.length > 100) {
    return iziToast.show({
      message: "It's too long, buddy",
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
    });
  }
  showLoader();

  getImage(query)
    .then(data => {
      if (data.hits.length != 0) {
        gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        lightboxImg();
        event.target.elements.search.value = '';
      } else {
        iziToast.show({
          message:
            'Sorry, there are no images matching your</br> search query. Please try again!',
          maxWidth: '432px',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
        });
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
