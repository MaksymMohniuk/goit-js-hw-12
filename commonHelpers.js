import{S as L,a as b,i as m}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=document.querySelector(".gallery");let v=new L(".gallery a",{captionsData:"alt",captionDelay:250});function u(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
      <img src="${e.webformatURL}" alt="${e.tags}">
      <div class="card-body">
        <p class="card-text">Likes: ${e.likes}</p>
        <p class="card-text">Views: ${e.views}</p>
        <p class="card-text">Comments: ${e.comments}</p>
        <p class="card-text">Downloads: ${e.downloads}</p>
      </div>
      </a>
    </li>`}function p(e){const r=e.map(s=>u(s)).join("");d.insertAdjacentHTML("beforeend",r),v.refresh()}let g=0;async function y(e,r){const s=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`,a=await b.get(s);return g=a.data.totalHits,a.data.hits}const w=document.querySelector("#searchInput"),S=document.querySelector('button[type="submit"]'),P=document.querySelector(".js-form"),f=document.querySelector(".loader"),i=document.querySelector(".load");let n="",c=1;const R=15;S.addEventListener("click",q);i.addEventListener("click",x);async function q(e){if(e.preventDefault(),n=w.value.trim(),!!n){f.classList.add("is-shown"),d.innerHTML="",P.reset();try{const r=await y(n);r.length?(f.classList.remove("is-shown"),c=1,u(r),p(r),i.classList.remove("hidden")):m.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"})}catch(r){console.error("Error:",r)}h()}}async function x(){c+=1;const e=await y(n,c);u(e),p(e),h(),window.scrollBy({top:d.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})}function h(){Math.ceil(g/R)<=c?(i.classList.add("hidden"),m.error({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
