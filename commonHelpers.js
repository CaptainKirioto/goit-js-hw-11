import"./assets/vendor-86291ea8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"44178222-91171e7a1f266369aa2a731c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${r}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:l})=>`
<li class="gallery-item">
<a class="link" href="${r}">
  <img class="gallery-img" alt=${n} src=${s}></img>
  <div class="stats-container">
    <p class="img-likes"> <span>Likes:</span> <span>${e}</span></p>
    <p class="img-views"> Views: ${t} </p>
    <p class="img-comments"> Comments: ${i}</p>
    <p class="img-downloads"> Downloads: ${l}</p>
</a>
</div>
</li >
`).join("")}const a=document.querySelector(".search-form");a.addEventListener("submit",p);const c=document.querySelector(".gallery-list");a.querySelector(".search-input");function p(o){o.preventDefault();let s=o.target.elements.search.value;u(s).then(r=>{console.log(r),c.innerHTML="",c.insertAdjacentHTML("beforeend",m(r.hits)),o.target.elements.search.value=""}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
