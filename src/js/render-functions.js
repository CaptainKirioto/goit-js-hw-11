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
    <p class="img-likes"> <span>Likes:</span> <span>${likes}</span></p>
    <p class="img-views"> Views: ${views} </p>
    <p class="img-comments"> Comments: ${comments}</p>
    <p class="img-downloads"> Downloads: ${downloads}</p>
</a>
</div>
</li >
`
    )
    .join('');
}
