import{a as p,S as y,i as g}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function d(e){const r=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${e}&image_type=photo?orientation=horizontal?safesearch=true?page=1&per_page=15`;return(await p.get(r)).data.hits}const l=document.querySelector(".gallery");let h=new y(".gallery a",{captionsData:"alt",captionDelay:250});function c(e){return`
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
    </li>`}function f(e){l.innerHTML="";const r=e.map(s=>c(s)).join("");l.innerHTML=r,h.refresh()}const L=document.querySelector("#searchInput"),b=document.querySelector('button[type="submit"]'),w=document.querySelector(".js-form"),u=document.querySelector(".loader"),S=document.querySelector(".load");let n="",m=1;b.addEventListener("click",q);S.addEventListener("click",v);async function q(e){if(e.preventDefault(),n=L.value.trim(),!!n){u.classList.add("is-shown"),w.reset();try{const r=await d(n);r.length===0?g.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(u.classList.remove("is-shown"),m=1,c(r),f(r))}catch(r){console.error("Error:",r)}}}async function v(){m+=1;const e=await d(n);console.log(e),c(e),f(e)}
//# sourceMappingURL=commonHelpers.js.map
