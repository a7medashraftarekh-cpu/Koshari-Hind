const WA="201080343968";
const menu=[
{cat:"كشري",name:"كشري صغير",price:20,desc:"أرز، مكرونة، عدس، حمص وصلصة"},
{cat:"كشري",name:"كشري وسط",price:25,desc:"وجبة كشري مشبعة بالطعم الأصلي"},
{cat:"كشري",name:"كشري كبير",price:30,desc:"الحجم الكبير لمحبي الكشري"},
{cat:"كشري",name:"كشري إكسترا",price:35,desc:"كشري مع إضافات زيادة"},
{cat:"كشري",name:"كشري سوبر",price:40,desc:"وجبة كبيرة ومليانة"},
{cat:"كشري",name:"كشري هند",price:50,desc:"اختيار مميز من كشري هند"},
{cat:"إضافات",name:"طبق حمص",price:30,desc:"إضافة حمص لذيذة"},
{cat:"إضافات",name:"طبق عدس",price:25,desc:"عدس ساخن بطعم أصيل"},
{cat:"إضافات",name:"طبق مكرونة",price:25,desc:"مكرونة مع الصلصة"},
{cat:"إضافات",name:"طبق رز",price:25,desc:"أرز مصري شهي"},
{cat:"إضافات",name:"صلصة",price:10,desc:"صلصة كشري"},
{cat:"إضافات",name:"دقة",price:10,desc:"دقة كشري مميزة"},
{cat:"طواجن",name:"طاجن مكرونة باللحمة",price:55,desc:"طاجن مكرونة باللحمة"},
{cat:"طواجن",name:"طاجن مكرونة بالفراخ",price:60,desc:"طاجن مكرونة بالفراخ"},
{cat:"طواجن",name:"طاجن مكرونة بالسجق",price:55,desc:"طاجن مكرونة بالسجق"},
{cat:"طواجن",name:"طاجن مكرونة بالجمبري",price:70,desc:"طاجن مكرونة بالجمبري"},
{cat:"فراخ",name:"ربع فرخة",price:85,desc:"ربع فرخة مشوية"},
{cat:"فراخ",name:"نصف فرخة",price:160,desc:"نصف فرخة مشوية"},
{cat:"فراخ",name:"فرخة كاملة",price:300,desc:"فرخة كاملة مشوية"},
{cat:"فراخ",name:"ربع فرخة وراك",price:75,desc:"ربع فرخة وراك"},
{cat:"كريب وحواوشي",name:"كريب فراخ",price:45,desc:"كريب فراخ متبل"},
{cat:"كريب وحواوشي",name:"كريب لحمة",price:50,desc:"كريب لحمة"},
{cat:"كريب وحواوشي",name:"كريب مشكل",price:55,desc:"كريب مشكل"},
{cat:"كريب وحواوشي",name:"حواوشي",price:40,desc:"حواوشي طازج"},
{cat:"كريب وحواوشي",name:"حواوشي + جبنة",price:50,desc:"حواوشي مع جبنة"},
{cat:"بيتزا",name:"بيتزا مارجريتا",price:90,desc:"صلصة، جبنة ومكونات طازجة"},
{cat:"بيتزا",name:"بيتزا خضار",price:95,desc:"تشكيلة خضار وجبنة"},
{cat:"بيتزا",name:"بيتزا فراخ",price:100,desc:"فراخ وجبنة"},
{cat:"بيتزا",name:"بيتزا لحمة",price:100,desc:"لحمة وجبنة"},
{cat:"بيتزا",name:"بيتزا سجق",price:95,desc:"سجق وجبنة"},
{cat:"بيتزا",name:"بيتزا مشكل جبن",price:110,desc:"تشكيلة جبن مميزة"},
{cat:"عروض",name:"عرض التوفير 1",price:330,desc:"كريب فراخ + بيتزا وسط + طبق مكرونة"},
{cat:"عروض",name:"عرض التوفير 2",price:260,desc:"فرخة كاملة + طبق رز + صوص"}
];
let cart=JSON.parse(localStorage.getItem("kh_cart_v2")||"[]"),activeCat="الكل";
const cats=["الكل",...new Set(menu.map(x=>x.cat))];
function renderFilters(){document.getElementById("filters").innerHTML=cats.map(c=>`<button class="filter ${c===activeCat?"active":""}" onclick="setCat('${c}')">${c}</button>`).join("")}
function setCat(c){activeCat=c;renderFilters();renderMenu()}
function renderMenu(){const items=activeCat==="الكل"?menu:menu.filter(x=>x.cat===activeCat);document.getElementById("menuGrid").innerHTML=items.map(x=>`<article class="item"><div class="item-top"><h3>${x.name}</h3><span class="price">${x.price} ج</span></div><p>${x.desc}</p><button class="add" onclick="addToCart(${menu.indexOf(x)})">+ أضف للسلة</button></article>`).join("")}
function addToCart(i){const x=menu[i],f=cart.find(y=>y.name===x.name);f?f.qty++:cart.push({...x,qty:1});saveCart();openCart()}
function changeQty(name,d){const x=cart.find(y=>y.name===name);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(y=>y.name!==name);saveCart();renderCart()}
function saveCart(){localStorage.setItem("kh_cart_v2",JSON.stringify(cart));renderCart()}
function renderCart(){const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.price*x.qty,0);document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=total+" جنيه";document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><div><h4>${x.name}</h4><small>${x.price} ج × ${x.qty}</small></div><div class="qty"><button onclick="changeQty('${x.name}',-1)">−</button><b>${x.qty}</b><button onclick="changeQty('${x.name}',1)">+</button></div></div>`).join(""):'<div style="text-align:center;color:#999;padding:60px 0">السلة فاضية 😅<br>اختار أكلك من المنيو</div>'}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function openWhatsApp(){if(!cart.length){alert("ضيف حاجة للسلة الأول 😄");return}const total=cart.reduce((s,x)=>s+x.price*x.qty,0);let msg="السلام عليكم، عايز أطلب من كشري هند:%0A%0A";cart.forEach(x=>msg+=`• ${x.name} × ${x.qty} = ${x.price*x.qty} جنيه%0A`);msg+=`%0Aالإجمالي: ${total} جنيه`;window.open(`https://wa.me/${WA}?text=${msg}`,"_blank")}
document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;renderFilters();renderMenu();renderCart();
