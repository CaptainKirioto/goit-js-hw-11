// функції для відображення елементів інтерфейсу

/* ----------- SimpleLightbox ----------- */

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/* ------------------------------ */

export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a class="img-link" href="${largeImageURL}">
    <img class="gallery-img" alt="${tags}" src=${webformatURL}></img> </a>
    <div class="stats-container">
      <span class="stats-info"><h5>Likes:</h5><p>${likes}</p></span>
      <span class="stats-info"><h5>Views:</h5><p>${views} </p></span>
      <span class="stats-info"><h5>Comments:</h5><p>${comments}</p></span>
      <span class="stats-info"><h5>Downloads:</h5><p>${downloads}</p></span>
    </div>
</li >
`
    )
    .join('');
}

export function lightboxImg() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: '250ms',
    captionsData: 'alt',
  });
  lightbox.refresh();
}

//! Other option

// export function createMarkup(image) {
//   return `
//  <li class="gallery-item">
//    <a class="img-link" href="${image.largeImageURL}">
//     <img class="gallery-img" alt=${image.tags} src=${image.webformatURL}></img>
//    </a>
//     <div class="stats-container">
//       <p class="p-likes">Likes:${image.likes}</p>
//       <p class="p-views">Views:${image.views} </p>
//       <p class="p-comments">Comments:${image.comments}</p>
//      <p class="p-downloads">Downloads:${image.downloads}</p>
//      </div>

//  </li >
//  `;
// }

// export function insertMarkup(arr) {
//   return arr.map(createMarkup).join('');
// }

// ---------- For main.js ----------
// const markup = insertMarkup(data.hits);
// gallery.innerHTML = markup;
