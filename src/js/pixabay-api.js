// функції для HTTP-запитів

export function getImage(requestedImg) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44178222-91171e7a1f266369aa2a731c5',
    q: requestedImg,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
