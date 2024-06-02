// функції для відображення елементів інтерфейсу

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
<a class="link" href="${largeImageURL}">
  <img class="gallery-img" alt=${tags} src=${webformatURL}></img>
  <div class="stats-container">
    <h5 class="h-likes">Likes:</h5><p class="p-likes">${likes}</p>
    <h5 class="h-likes">Views:</h5><p class="p-views">${views} </p>
    <h5 class="h-likes">Comments:</h5><p class="p-comments">${comments}</p>
    <h5 class="h-likes">Downloads:</h5><p class="p-downloads">${downloads}</p>
</a>
</div>
</li >
`
    )
    .join('');
}
