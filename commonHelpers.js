import{a as u,S as d,i as f}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function m(t){const o=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${t}&image_type=photo?orientation=horizontal?safesearch=true?page=1&per_page=15`;return(await u.get(o)).data.hits}const i=document.querySelector(".gallery");let p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function l(t){return`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}">
      <div class="card-body">
        <p class="card-text">Likes: ${t.likes}</p>
        <p class="card-text">Views: ${t.views}</p>
        <p class="card-text">Comments: ${t.comments}</p>
        <p class="card-text">Downloads: ${t.downloads}</p>
      </div>
      </a>
    </li>`}function y(t){i.innerHTML="";const o=t.map(s=>l(s)).join("");i.innerHTML=o,p.refresh()}const g=document.querySelector("#searchInput"),h=document.querySelector('button[type="submit"]'),b=document.querySelector(".js-form"),c=document.querySelector(".loader");let L=1;h.addEventListener("click",w);async function w(t){t.preventDefault();const o=g.value.trim();if(o){c.classList.add("is-shown"),b.reset();try{const s=await m(o);s.length===0?f.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(c.classList.remove("is-shown"),L=1,l(s),y(s))}catch(s){console.error("Error:",s)}}}
//# sourceMappingURL=commonHelpers.js.map
