(()=>{"use strict";let e=document.querySelectorAll(".tab-input"),t=document.querySelectorAll(".tab-content"),l=0;t[l].classList.add("visible");for(let s=0;s<e.length;s++)e[s].addEventListener("click",(()=>{t[l].classList.remove("visible"),l=s,t[l].classList.add("visible")}))})();