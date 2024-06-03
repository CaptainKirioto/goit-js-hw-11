import{S as f,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44178222-91171e7a1f266369aa2a731c5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!1}),i=`${o}?${s}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:h})=>`
<li class="gallery-item">
  <a class="img-link" href="${s}">
    <img class="gallery-img" alt="${i}" src=${o}></img> </a>
    <div class="stats-container">
      <span class="stats-info"><h5>Likes:</h5><p>${e}</p></span>
      <span class="stats-info"><h5>Views:</h5><p>${t} </p></span>
      <span class="stats-info"><h5>Comments:</h5><p>${a}</p></span>
      <span class="stats-info"><h5>Downloads:</h5><p>${h}</p></span>
    </div>
</li >
`).join("")}function g(){new f(".gallery a",{captionDelay:"250ms",captionsData:"alt"}).refresh()}//! Other option
const d=document.querySelector(".search-form");d.addEventListener("submit",F);const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(){c.style.visibility="visible"}function u(){c.style.visibility="hidden"}u();function F(r){r.preventDefault(),l.innerHTML="";let o=r.target.elements.search.value.trim();if(!o)return n.show({message:"You can't do that here",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"});if(o.length>100)return n.show({message:"It's too long, buddy",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"});y(),p(o).then(s=>{s.hits.length!=0?(l.insertAdjacentHTML("beforeend",m(s.hits)),g(),r.target.elements.search.value=""):n.show({message:"Sorry, there are no images matching your</br> search query. Please try again!",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"})}).catch(s=>{console.log(s)}).finally(()=>{u()})}
//# sourceMappingURL=commonHelpers.js.map
