const items = [
  {name:"Crispy Corn",category:"Starters",price:149,emoji:"🌽",description:"Crunchy sweet corn with herbs and a light spice mix."},
  {name:"Paneer Tikka",category:"Starters",price:219,emoji:"🧀",description:"Grilled paneer with peppers and a smoky marinade."},
  {name:"Garden Burger",category:"Main Course",price:199,emoji:"🍔",description:"A veggie patty, fresh lettuce and house-style sauce."},
  {name:"Masala Pasta",category:"Main Course",price:229,emoji:"🍝",description:"Pasta tossed with vegetables and a mild masala sauce."},
  {name:"Margherita Pizza",category:"Main Course",price:249,emoji:"🍕",description:"Tomato, mozzarella and fragrant basil on a crisp base."},
  {name:"Mango Cooler",category:"Drinks",price:99,emoji:"🥭",description:"A refreshing mango drink served chilled."},
  {name:"Cold Coffee",category:"Drinks",price:119,emoji:"🥤",description:"Smooth chilled coffee with a creamy finish."},
  {name:"Chocolate Brownie",category:"Starters",price:129,emoji:"🍫",description:"A rich chocolate treat for your sweet tooth."},
  {name:"Fresh Lime Soda",category:"Drinks",price:79,emoji:"🍋",description:"A zesty lime soda, sweet or salted."}
];
let activeCategory = "All";
const order = [];
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");

function renderMenu() {
  const query = search.value.trim().toLowerCase();
  const visible = items.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
  );
  menu.innerHTML = visible.map(item => `
    <article class="item">
      <div class="food-art" aria-hidden="true">${item.emoji}</div>
      <div class="item-body">
        <div class="item-top"><h3>${item.name}</h3><span class="price">₹${item.price}</span></div>
        <span class="tag">${item.category}</span>
        <p>${item.description}</p>
        <button class="add" data-name="${item.name}">+ Add to order</button>
      </div>
    </article>`).join("") || "<p>No menu items found. Try another search.</p>";
  menu.querySelectorAll(".add").forEach(button => button.addEventListener("click", () => {
    order.push(items.find(item => item.name === button.dataset.name));
    renderOrder();
  }));
}
function renderOrder() {
  const total = order.reduce((sum, item) => sum + item.price, 0);
  document.querySelector("#order-count").textContent = `${order.length} item${order.length === 1 ? "" : "s"} selected`;
  document.querySelector("#order-detail").textContent = order.length
    ? `${order.map(item => item.name).join(", ")} · Demo total: ₹${total}`
    : "Choose an item to add it to your demo order.";
}
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
  renderMenu();
}));
search.addEventListener("input", renderMenu);
document.querySelector("#clear-order").addEventListener("click", () => { order.length = 0; renderOrder(); });
renderMenu();
