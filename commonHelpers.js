import"./assets/vendor-86291ea8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"44178222-91171e7a1f266369aa2a731c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),c=`${s}?${r}`;return fetch(c).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:r,tags:c,likes:e,views:t,comments:n,downloads:a})=>`
<li class="gallery-item">
<a class="link" href="${r}">
  <img class="gallery-img" alt=${c} src=${s}></img>
  <div class="stats-container">
    <h5 class="h-likes">Likes:</h5><p class="p-likes">${e}</p>
    <h5 class="h-likes">Views:</h5><p class="p-views">${t} </p>
    <h5 class="h-likes">Comments:</h5><p class="p-comments">${n}</p>
    <h5 class="h-likes">Downloads:</h5><p class="p-downloads">${a}</p>
</a>
</div>
</li >
`).join("")}const l=document.querySelector(".search-form");l.addEventListener("submit",f);const i=document.querySelector(".gallery-list");l.querySelector(".search-input");function f(o){o.preventDefault();let s=o.target.elements.search.value;u(s).then(r=>{console.log(r),i.innerHTML="",i.insertAdjacentHTML("beforeend",p(r.hits)),o.target.elements.search.value=""}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
