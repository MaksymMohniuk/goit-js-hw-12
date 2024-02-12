import{a as u,S as d,i as f}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(t){const s=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${t}&image_type=photo?orientation=horizontal?safesearch=true`;return(await u.get(s)).data.hits}const i=document.querySelector(".gallery");let p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function l(t){return`
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
    </li>`}function y(t){i.innerHTML="";const s=t.map(o=>l(o)).join("");i.innerHTML=s,p.refresh()}const g=document.querySelector("#searchInput"),h=document.querySelector('button[type="submit"]'),b=document.querySelector(".js-form"),c=document.querySelector(".loader");h.addEventListener("click",L);async function L(t){t.preventDefault();const s=g.value.trim();if(s){c.classList.add("is-shown"),b.reset();try{const o=await m(s);o.length===0?f.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(c.classList.remove("is-shown"),l(o),y(o.data.hits))}catch(o){console.error("Error:",o)}}}
//# sourceMappingURL=commonHelpers.js.map
