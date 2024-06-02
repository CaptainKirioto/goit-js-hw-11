import{S as u}from"./assets/vendor-5af972a3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"44178222-91171e7a1f266369aa2a731c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=`${s}?${r}`;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const f=new u(".gallery a",{captionDelay:"250ms",captionsData:"alt"});f.refresh();function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:l,downloads:i})=>`
<li class="gallery-item">
<a class="gallery-link" href="${r}">
  <img class="gallery-img" alt=${a} src=${s}></img>
  <div class="stats-container">
    <h5 class="h-likes">Likes:</h5><p class="p-likes">${e}</p>
    <h5 class="h-likes">Views:</h5><p class="p-views">${t} </p>
    <h5 class="h-likes">Comments:</h5><p class="p-comments">${l}</p>
    <h5 class="h-likes">Downloads:</h5><p class="p-downloads">${i}</p>
</div>
</a>
</li >
`).join("")}const c=document.querySelector(".search-form");c.addEventListener("submit",m);const n=document.querySelector(".gallery-list");c.querySelector(".search-input");function m(o){o.preventDefault();let s=o.target.elements.search.value;p(s).then(r=>{console.log(r),n.innerHTML="",n.insertAdjacentHTML("beforeend",h(r.hits)),o.target.elements.search.value=""}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
