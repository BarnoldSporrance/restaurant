(()=>{"use strict";const e=()=>{null!==document.getElementById("mainC")&&(alert("MainC is here and should be deleted"),mainC.remove()),null!==document.getElementById("mainM")&&(alert("MainM is here and should be deleted to avoid repeat"),mainM.remove());const e=document.createElement("div");e.setAttribute("id","mainH"),navBar.classList.remove("blackFont"),navBar.classList.add("whiteFont");const t=document.createElement("div"),n=document.createTextNode("Cook dat Food");t.setAttribute("id","headerID"),t.appendChild(n),e.appendChild(t),t.setAttribute("class","whiteFont"),t.classList.remove("blackFont");const i=document.createElement("img");i.setAttribute("src","../src/images/salad.jpg"),i.setAttribute("id","backGroundImage"),e.appendChild(i);const s=document.createElement("div");s.setAttribute("id","blurbHolder"),s.innerText="Welcome to Yanni's amazing food wonderland. Where dreams become reality. The pinnacle of yum. And lots of other, nice, friendly, pleasant compliments about the food. My word, it's rather good, eh!?",s.setAttribute("class","whiteFont"),s.classList.remove("blackFont"),e.appendChild(s),content.appendChild(e)};(()=>{let e=document.getElementById("content");const t=document.createElement("div");t.setAttribute("id","navBar"),t.setAttribute("class","whiteFont"),t.classList.remove("blackFont"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","homeTab"),n.setAttribute("class","navTab"),n.innerText="Home",t.appendChild(n);const i=document.createElement("div");i.setAttribute("id","contactTab"),i.setAttribute("class","navTab"),i.innerText="Contact",t.appendChild(i);const s=document.createElement("div");s.setAttribute("id","menuTab"),s.setAttribute("class","navTab"),s.innerText="Menu",t.appendChild(s)})(),e(),document.getElementById("contactTab").addEventListener("click",(()=>{null!==document.getElementById("mainH")&&(alert("MainH is here and should be deleted"),mainH.remove()),null!==document.getElementById("mainM")&&(alert("MainM is here and should be deleted to avoid repeat"),mainM.remove());const e=document.createElement("div");e.setAttribute("id","mainC"),navBar.setAttribute("class","blackFont"),navBar.classList.remove("whiteFont");const t=document.createElement("div"),n=document.createTextNode("Cook dat Food");t.setAttribute("id","headerIDC"),t.setAttribute("class","blackFont"),t.classList.remove("whiteFont"),t.appendChild(n),e.appendChild(t);const i=document.createElement("img");i.setAttribute("src","../src/images/bulgar.jpg"),i.setAttribute("id","backGroundImageC"),e.appendChild(i);const s=document.createElement("div");s.setAttribute("id","contactHolder"),s.setAttribute("class","whiteFont");const d=document.createElement("img");d.setAttribute("class","contactIcon"),d.setAttribute("src","../src/images/youtube.png");const a=document.createElement("img");a.setAttribute("class","contactIcon"),a.setAttribute("src","../src/images/instagram.png"),s.appendChild(d),s.appendChild(a),e.appendChild(s),content.appendChild(e)})),document.getElementById("menuTab").addEventListener("click",(()=>{null!==document.getElementById("mainH")&&(alert("MainH is here and should be deleted"),mainH.remove()),null!==document.getElementById("mainC")&&(alert("MainC is here and should be deleted"),mainC.remove()),navBar.setAttribute("class","whiteFont"),navBar.classList.remove("blackFont");let e=document.createElement("div");e.setAttribute("id","mainM");const t=document.createElement("div"),n=document.createTextNode("Cook dat Food");t.setAttribute("id","headerID"),t.appendChild(n),t.setAttribute("class","whiteFont"),t.classList.remove("blackFont"),e.appendChild(t);const i=document.createElement("img");i.setAttribute("src","../src/images/table.jpg"),i.setAttribute("id","backGroundImageM"),e.appendChild(i);const s=document.createElement("div");s.setAttribute("id","backgroundLayerM");const d=document.createElement("div");d.setAttribute("id","menuWrapper");const a=document.createElement("div");a.setAttribute("class","dish"),a.setAttribute("id","dish1");const c=document.createElement("p");c.setAttribute("class","dishTitle"),c.setAttribute("id","dish1Title"),c.innerText="cock-a-leekie soup";const r=document.createElement("p");r.setAttribute("class","description"),r.innerText="Chicken, leak, pearl barley and prunes for flavour",c.appendChild(r),d.appendChild(c);const o=document.createElement("div");o.setAttribute("class","dish"),o.setAttribute("id","dish2");const l=document.createElement("p");l.setAttribute("class","dishTitle"),l.setAttribute("id","dish2Title"),l.innerText="stovies";const m=document.createElement("p");m.setAttribute("class","description"),m.innerText="potatoes sweated with slow-cooked lamb, root vegetbables and spices.",l.appendChild(m),d.appendChild(l);const u=document.createElement("div");u.setAttribute("class","dish"),u.setAttribute("id","dish3");const b=document.createElement("p");b.setAttribute("class","dishTitle"),b.setAttribute("id","dish3Title"),b.innerText="lentil & ham hock soup ";const h=document.createElement("p");h.setAttribute("class","description"),h.innerText="flavorful, hearty smoked ham laces this hearty red lentil & onion broth with real punch.",b.appendChild(h),d.appendChild(b);const p=document.createElement("div");p.setAttribute("class","dish"),p.setAttribute("id","dish4");const A=document.createElement("p");A.setAttribute("class","dishTitle"),A.setAttribute("id","dish4Title"),A.innerText="`full Scottish breakfast ";const v=document.createElement("p");v.setAttribute("class","description"),v.innerText="the works: haggis slices, lorne sausage, beans, tattie scones, black pudding, dumpling, feid mushrooms & fried tomatos.",A.appendChild(v),d.appendChild(A);const C=document.createElement("div");C.setAttribute("class","dish"),C.setAttribute("id","dish5");const E=document.createElement("p");E.setAttribute("class","dishTitle"),E.setAttribute("id","dish5Title"),E.innerText="Crunachan";const g=document.createElement("p");g.setAttribute("class","description"),g.innerText="Strawberry, raspberrys and honey combined with yogurt and whiiped cream, topped with candied oats.",E.appendChild(g),d.appendChild(E),e.appendChild(d),e.appendChild(s),content.appendChild(e)})),document.getElementById("homeTab").addEventListener("click",e)})();