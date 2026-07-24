const WA="201080343968";
const menu=[
{cat:"كشري",name:"كشري صغير",price:15,desc:"أرز - مكرونة - عدس - حمص - بصل - صلصة"},
{cat:"كشري",name:"كشري وسط",price:20,desc:"أرز - مكرونة - عدس - حمص - بصل - صلصة"},
{cat:"كشري",name:"كشري كبير",price:25,desc:"أرز - مكرونة - عدس - حمص - بصل - صلصة"},
{cat:"كشري",name:"كشري سوبر جامبو",price:30,desc:"وجبة كبيرة لمحبي الكشري"},
{cat:"كشري",name:"كشري هند",price:40,desc:"وجبة مميزة من كشري هند"},
{cat:"كريب وحواوشي",name:"حواوشي عادي",price:40,desc:"حواوشي طازج ومشبع"},
{cat:"كريب وحواوشي",name:"حواوشي جبنة",price:50,desc:"حواوشي مع جبنة"},
{cat:"كريب وحواوشي",name:"حواوشي خاص",price:55,desc:"اختيار خاص ومميز"},
{cat:"فراخ",name:"ربع فرخة",price:85,desc:"مشوية بطعم أصيل"},
{cat:"فراخ",name:"نصف فرخة",price:160,desc:"نصف فرخة مشوية"},
{cat:"فراخ",name:"فرخة كاملة",price:300,desc:"فرخة كاملة مشوية"},
{cat:"عروض",name:"عرض كشري هند",price:75,desc:"٢ كشري كبير + ٢ ملوخية عالي"},
{cat:"عروض",name:"عرض العيلة",price:160,desc:"٣ كشري كبير + طبق بامية عالي + ٢ حواوشي"},
{cat:"عروض",name:"عرض السوبر",price:260,desc:"٤ كشري كبير + ٢ ملوخية عالي + ٤ حواوشي"},
{cat:"مشروبات",name:"بيبسي",price:20,desc:"مشروب غازي"},
{cat:"مشروبات",name:"مياه معدنية",price:10,desc:"مياه باردة"}
];
let cart=JSON.parse(localStorage.getItem("kh_cart_v3")||"[]"),activeCat="كشري";
function setCat(cat){activeCat=cat;document.getElementById("menuTitle").textContent=cat==="كريب وحواوشي"?"الحواوشي":cat;document.querySelectorAll(".category").forEach(b=>b.classList.toggle("active",b.textContent.includes(cat==="كريب وحواوشي"?"حواوشي":cat)));renderMenu();document.querySelector("#menu").scrollIntoView({behavior:"smooth"})}
function renderMenu(){let items=menu.filter(x=>x.cat===activeCat);document.getElementById("menuGrid").innerHTML=items.map((x,i)=>`<article class="item"><div class="food-art"></div><h3>${x.name}</h3><p>${x.desc}</p><div class="price">${x.price} جنيه</div><button class="add" onclick="addToCart(${menu.indexOf(x)})">أضف +</button></article>`).join("")}
function addToCart(i){let x=menu[i],f=cart.find(y=>y.name===x.name);f?f.qty++:cart.push({...x,qty:1});saveCart();openCart()}
function changeQty(name,d){let x=cart.find(y=>y.name===name);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(y=>y.name!==name);saveCart()}
function saveCart(){localStorage.setItem("kh_cart_v3",JSON.stringify(cart));renderCart()}
function renderCart(){let count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.price*x.qty,0);document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=total+" جنيه";document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><div><h4>${x.name}</h4><small>${x.price} جنيه × ${x.qty}</small></div><div class="qty"><button onclick="changeQty('${x.name}',-1)">−</button><b>${x.qty}</b><button onclick="changeQty('${x.name}',1)">+</button></div></div>`).join(""):"<p style='text-align:center;color:#999;padding:50px 0'>السلة فاضية 😅</p>"}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function openWhatsApp(){if(!cart.length){alert("ضيف طلب للسلة الأول 😄");return}let total=cart.reduce((s,x)=>s+x.price*x.qty,0),msg="السلام عليكم، عايز أطلب من كشري هند:%0A%0A";cart.forEach(x=>msg+=`• ${x.name} × ${x.qty} = ${x.price*x.qty} جنيه%0A`);msg+=`%0Aالإجمالي: ${total} جنيه`;window.open(`https://wa.me/${WA}?text=${msg}`,"_blank")}
document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;renderMenu();renderCart();
