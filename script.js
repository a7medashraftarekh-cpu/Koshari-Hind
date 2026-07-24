const products = [
  { id: 1, category: "koshary", name: "كشري صغير", description: "أرز ومكرونة وعدس وحمص وصلصة وبصل مقرمش.", price: 20, icon: "🍲", image: "assets/food-koshary/koshary-small.svg" },
  { id: 2, category: "koshary", name: "كشري وسط", description: "خلطة كشري هند الأصلية بحجم مناسب.", price: 25, icon: "🍲", image: "assets/food-koshary/koshary-small.svg" },
  { id: 3, category: "koshary", name: "كشري كبير", description: "طبق كبير مليان من كل مكونات الكشري.", price: 30, icon: "🍲", image: "assets/food-koshary/koshary-small.svg" },
  { id: 4, category: "koshary", name: "كشري سوبر", description: "وجبة أكبر لمحبي الكشري.", price: 35, icon: "🍲", image: "assets/food-koshary/koshary-small.svg" },
  { id: 5, category: "koshary", name: "كشري جامبو", description: "حجم جامبو من خلطة كشري هند.", price: 40, icon: "🍲", image: "assets/food-koshary/koshary-small.svg" },
  { id: 6, category: "koshary", name: "كشري هند", description: "اختيار مميز من كشري هند.", price: 50, icon: "👑", image: "assets/food-koshary/koshary-large.svg" },

  { id: 7, category: "hawawshi", name: "حواوشي عادي", description: "رغيف حواوشي محمص بحشوة متبلة.", price: 35, icon: "🥙", image: "assets/food-hawawshi/hawawshi.svg" },
  { id: 8, category: "hawawshi", name: "حواوشي جبنة", description: "حواوشي مع إضافة جبنة.", price: 40, icon: "🥙", image: "assets/food-hawawshi/hawawshi.svg" },
  { id: 9, category: "hawawshi", name: "حواوشي سوبر", description: "حواوشي بحجم أكبر وحشوة أغنى.", price: 45, icon: "🥙", image: "assets/food-hawawshi/hawawshi.svg" },
  { id: 10, category: "hawawshi", name: "حواوشي ميكس", description: "اختيار مميز من الحواوشي.", price: 50, icon: "🥙", image: "assets/food-hawawshi/hawawshi.svg" },

  { id: 11, category: "chicken", name: "ربع فرخة", description: "فراخ مشوية بتتبيلة شرقية.", price: 85, icon: "🍗", image: "assets/food-chicken/chicken.svg" },
  { id: 12, category: "chicken", name: "نصف فرخة", description: "نصف فرخة مشوية.", price: 160, icon: "🍗", image: "assets/food-chicken/chicken.svg" },
  { id: 13, category: "chicken", name: "فرخة كاملة", description: "فرخة كاملة مناسبة للمشاركة.", price: 300, icon: "🍗", image: "assets/food-chicken/chicken.svg" },

  { id: 14, category: "hawawshi", name: "كريب فراخ", description: "كريب بحشوة الفراخ.", price: 45, icon: "🌯", image: "assets/food-hawawshi/hawawshi.svg" },
  { id: 15, category: "hawawshi", name: "كريب ميكس", description: "كريب ميكس بحشوة متنوعة.", price: 50, icon: "🌯", image: "assets/food-hawawshi/hawawshi.svg" },
  { id: 16, category: "hawawshi", name: "كريب مشكل جبنة", description: "كريب مع تشكيلة جبن.", price: 55, icon: "🌯", image: "assets/food-hawawshi/hawawshi.svg" },

  { id: 17, category: "drinks", name: "بيبسي", description: "مشروب غازي بارد.", price: 15, icon: "🥤", image: "assets/drinks/drinks.svg" },
  { id: 18, category: "drinks", name: "مياه معدنية", description: "مياه معدنية باردة.", price: 10, icon: "💧", image: "assets/drinks/drinks.svg" },
  { id: 19, category: "drinks", name: "عصير", description: "اختيار من العصائر المتاحة.", price: 20, icon: "🧃", image: "assets/drinks/drinks.svg" }
];

const offers = [
  { name: "عرض التوفير 1", items: ["فرخة كاملة", "2 طبق كشري"], price: "260 جنيه" },
  { name: "عرض التوفير 2", items: ["3 كشري وسط", "2 حواوشي"], price: "330 جنيه" },
  { name: "عرض كشري هند", items: ["2 كشري كبير", "2 ملوخية عالي"], price: "حسب المنيو الأصلية" }
];

const categoryNames = {
  all: "كل المنيو",
  koshary: "الكشري",
  hawawshi: "الحواوشي والكريب",
  chicken: "الفراخ",
  drinks: "المشروبات"
};

let cart = JSON.parse(localStorage.getItem("kosharyHendCart") || "[]");
let activeCategory = "all";

const productsGrid = document.getElementById("productsGrid");
const categoryTabs = document.getElementById("categoryTabs");
const offersGrid = document.getElementById("offersGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutModal = document.getElementById("checkoutModal");

function renderCategories() {
  categoryTabs.innerHTML = Object.entries(categoryNames).map(([key, name]) =>
    `<button class="${activeCategory === key ? "active" : ""}" data-category="${key}">${name}</button>`
  ).join("");
  categoryTabs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filtered = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  productsGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-visual visual-${product.category}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <span class="price">${product.price} جنيه</span>
          <button class="add-btn" data-id="${product.id}">أضف +</button>
        </div>
      </div>
    </article>
  `).join("");

  productsGrid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
}

function saveCart() {
  localStorage.setItem("kosharyHendCart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = `${total} جنيه`;

  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart">السلة فاضية حاليًا 🛒<br>اختار أكلك المفضل وابدأ الطلب.</div>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `
      <div class="cart-item">
        <div>
          <h4>${product.name}</h4>
          <small>${product.price * item.qty} جنيه</small>
          <div class="qty-controls">
            <button data-action="minus" data-id="${product.id}">−</button>
            <strong>${item.qty}</strong>
            <button data-action="plus" data-id="${product.id}">+</button>
          </div>
        </div>
        <div>${product.icon}</div>
      </div>
    `;
  }).join("");

  cartItems.querySelectorAll("button").forEach(btn => {
    const amount = btn.dataset.action === "plus" ? 1 : -1;
    btn.addEventListener("click", () => changeQty(Number(btn.dataset.id), amount));
  });
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

function openCheckout() {
  if (!cart.length) {
    alert("السلة فاضية. اختار المنتجات الأول.");
    return;
  }
  checkoutModal.classList.add("open");
}
function closeCheckout() {
  checkoutModal.classList.remove("open");
}

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("closeModal").addEventListener("click", closeCheckout);

document.getElementById("checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const notes = formData.get("notes");

  const lines = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `${product.name} × ${item.qty} = ${product.price * item.qty} جنيه`;
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  const message = [
    "السلام عليكم، عايز أطلب من كشري هند:",
    "",
    ...lines,
    "",
    `الإجمالي: ${total} جنيه`,
    "",
    `الاسم: ${name}`,
    `رقم الهاتف: ${phone}`,
    `العنوان: ${address}`,
    `ملاحظات: ${notes || "لا يوجد"}`
  ].join("\n");

  window.open(`https://wa.me/201080343968?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

offersGrid.innerHTML = offers.map(offer => `
  <article class="offer-card">
    <h3>${offer.name}</h3>
    <ul>${offer.items.map(item => `<li>${item}</li>`).join("")}</ul>
    <div class="offer-price">${offer.price}</div>
    <a class="btn btn-outline" href="#menu">اختار طلبك</a>
  </article>
`).join("");

renderCategories();
renderProducts();
renderCart();
