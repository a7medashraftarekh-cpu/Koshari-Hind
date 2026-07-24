const menu = [
 {n:"علبة هندي",c:"كشري",p:20,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
 {n:"كشري سوبر",c:"كشري",p:25,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
 {n:"كشري ميجا",c:"كشري",p:30,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
 {n:"كشري إكسترا",c:"كشري",p:35,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
 {n:"كشري إسبشيال",c:"كشري",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
 {n:"كشري هند عائلي",c:"كشري",p:45,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
 {n:"كشري هند جامبو",c:"كشري",p:50,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
 {n:"طاجن فراخ",c:"طواجن",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
 {n:"طاجن لحمة",c:"طواجن",p:35,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
 {n:"ميكس طاجن فراخ",c:"طواجن",p:55,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
 {n:"ميكس طاجن لحمة",c:"طواجن",p:50,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
 {n:"طاجن فراخ موزاريلا",c:"طواجن",p:60,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
 {n:"فتة فراخ",c:"سوري",p:80,i:"https://kimi-web-img.moonshot.cn/img/asif.org/811b3c58aab450df15234a0f91bdbb5565dca4b8.jpg"},
 {n:"وجبة زنجبر",c:"سوري",p:95,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
 {n:"وجبة عربي سبيسو",c:"سوري",p:90,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
 {n:"وجبة عربي سوري",c:"سوري",p:125,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
 {n:"وجبة عربي دبل",c:"سوري",p:155,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
 {n:"بيتزا سوري",c:"سوري",p:105,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/d998b539356801f6a6c2f8ad58c44891bc1c378e.jpg"},
 {n:"دبل ورق",c:"سوري",p:155,i:"https://kimi-web-img.moonshot.cn/img/asif.org/811b3c58aab450df15234a0f91bdbb5565dca4b8.jpg"},
 {n:"كريب شاورما لحمة",c:"كريب",p:70,i:"https://kimi-web-img.moonshot.cn/img/papai.online/c52fdda58635b0303d954daa0e99541f3376a190.png"},
 {n:"كريب برجر",c:"كريب",p:60,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
 {n:"كريب كفتة",c:"كريب",p:55,i:"https://kimi-web-img.moonshot.cn/img/papai.online/c52fdda58635b0303d954daa0e99541f3376a190.png"},
 {n:"كريب سوسيس",c:"كريب",p:55,i:"https://kimi-web-img.moonshot.cn/img/majesty.com.eg/88540b55a042f06686901e1f7f10490047f16ebd.png"},
 {n:"كريب شيش طاووق",c:"كريب",p:70,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
 {n:"كريب مشكل لحوم",c:"كريب",p:80,i:"https://kimi-web-img.moonshot.cn/img/wasallyeg.com/402c42fe68d061f39779c37db1321a193158c831.webp"},
 {n:"كريب سجق",c:"كريب",p:60,i:"https://kimi-web-img.moonshot.cn/img/majesty.com.eg/88540b55a042f06686901e1f7f10490047f16ebd.png"},
 {n:"كريب بطاطس فراخ",c:"كريب",p:45,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
 {n:"كريب بطاطس ميكس",c:"كريب",p:50,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
 {n:"كريب مشكل جبن",c:"كريب",p:45,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
 {n:"ربع فرخة",c:"مشويات",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.atyabtabkha.com/daf1ff052346dee4a68975453ab1821eb268d3c0.jpg"},
 {n:"نصف فرخة",c:"مشويات",p:180,i:"https://kimi-web-img.moonshot.cn/img/www.atyabtabkha.com/daf1ff052346dee4a68975453ab1821eb268d3c0.jpg"},
 {n:"فرخة كاملة",c:"مشويات",p:340,i:"https://kimi-web-img.moonshot.cn/img/www.atyabtabkha.com/daf1ff052346dee4a68975453ab1821eb268d3c0.jpg"},
 {n:"بيتزا إيطالي",c:"بيتزا",p:70,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/d998b539356801f6a6c2f8ad58c44891bc1c378e.jpg"},
 {n:"بيتزا شرقي",c:"بيتزا",p:85,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/d998b539356801f6a6c2f8ad58c44891bc1c378e.jpg"},
 {n:"فطير حلو",c:"بيتزا",p:50,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/d9903afccea158acdf6ca39b0f4e7bc3f3b5c5a7.jpg"},
 {n:"فطير حادق",c:"بيتزا",p:110,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/d998b539356801f6a6c2f8ad58c44891bc1c378e.jpg"},
 {n:"فطير كشري",c:"بيتزا",p:125,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
 {n:"هوجز + شيكولاتة",c:"حلو",p:40,i:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"},
 {n:"موز + شيكولاتة",c:"حلو",p:40,i:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"},
 {n:"مكسرات + شيكولاتة",c:"حلو",p:50,i:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"},
 {n:"موز + مكسرات + عسل",c:"حلو",p:55,i:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"}
];
let currentFilter="الكل", cart=[];
const grid=document.getElementById("menuGrid");
function renderMenu(){
 const q=(document.getElementById("searchInput")?.value||"").trim();
 const data=menu.filter(x=>(currentFilter==="الكل"||x.c===currentFilter)&&(!q||x.n.includes(q)||x.c.includes(q)));
 grid.innerHTML=data.map((x,idx)=>`<article class="menu-item"><div class="item-img-wrap"><img src="${x.i}" alt="${x.n}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/2a110d/f4a20c?text=${encodeURIComponent(x.n)}'"></div><h3>${x.n}</h3><p>${x.c} • طعم أصيل وجودة مضمونة</p><div class="price-row"><span class="price">${x.p} ج</span><button class="add-btn" onclick="addToCart(${menu.indexOf(x)})">+ أضف</button></div></article>`).join("")||'<p>مفيش نتائج مطابقة للبحث.</p>';
}
document.querySelectorAll("#filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");currentFilter=b.dataset.filter;renderMenu()}));
function filterMenu(cat){currentFilter=cat;document.querySelectorAll("#filters button").forEach(b=>b.classList.toggle("active",b.dataset.filter===cat));document.getElementById("menu").scrollIntoView({behavior:"smooth"});renderMenu()}
function addToCart(i){cart.push(menu[i]);updateCart();showToast("اتضاف للسلة 🔥")}
function updateCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><div><img src="${x.i}" class="cart-thumb" alt=""><div><b>${x.n}</b><small>${x.c}</small></div></div><div><b>${x.p} ج</b><br><button onclick="removeItem(${i})">حذف</button></div></div>`).join(""):"<p style='color:#a89189;text-align:center;margin-top:50px'>السلة فاضية.. اطلب حاجة حلوة 😋</p>";document.getElementById("cartTotal").textContent=cart.reduce((a,x)=>a+x.p,0)+" جنيه"}
function removeItem(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("cartDrawer").classList.add("open")}
function closeCart(e){if(!e||e.target.id==="cartDrawer")document.getElementById("cartDrawer").classList.remove("open")}
function checkout(){if(!cart.length){showToast("السلة فاضية 😅");return}let total=cart.reduce((a,x)=>a+x.p,0);let items=cart.map(x=>x.n).join("، ");let msg=encodeURIComponent(`مرحباً كشري هند 👋%0Aعايز أطلب: ${items}%0Aالإجمالي التقريبي: ${total} جنيه`);window.open(`https://wa.me/201210195153?text=${msg}`,"_blank")}
function showToast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function toggleMobileNav(){document.getElementById("mobileNav").classList.toggle("open")}
renderMenu();updateCart();
