// ARC TOYS V2

const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Card Animation
window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = ".5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});
// ===== CART OPEN / CLOSE =====

const cartIcon = document.querySelector(".cart-icon");
const cartPanel = document.querySelector(".cart-panel");

cartIcon.addEventListener("click", () => {
    cartPanel.classList.toggle("active");
});
// ================================
// ADD TO CART SYSTEM
// ================================

let cart = [];

const addButtons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const subtotal = document.getElementById("subtotal");
const delivery = document.getElementById("delivery");
const total = document.getElementById("total");

addButtons.forEach((button) => {

button.addEventListener("click", () => {

const card = button.closest(".card");

const name = card.querySelector("h3").innerText;

const price = parseInt(
card.querySelector(".price").innerText.replace(/[^\d]/g,"")
);

cart.push({
name:name,
price:price,
qty:1
});

updateCart();

});

});

function updateCart(){

cartItems.innerHTML = "";

let sub = 0;

cart.forEach((item,index)=>{

sub += item.price * item.qty;

cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

<div class="qty-box">

<button onclick="changeQty(${index},-1)">−</button>

<span>${item.qty}</span>

<button onclick="changeQty(${index},1)">+</button>

</div>

<button class="remove-btn" onclick="removeItem(${index})">
🗑 Remove
</button>

</div>

`;

});

cartCount.innerText = cart.length;

let ship = sub >= 2000 ? 0 : 100;

subtotal.innerText = sub;

delivery.innerText = ship;

total.innerText = sub + ship;

}

function changeQty(index,value){

cart[index].qty += value;

if(cart[index].qty <= 0){
cart.splice(index,1);
}

updateCart();

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}
function openPopup(){

document.getElementById("popup").style.display="block";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
const saleEnd = new Date("August 15, 2026 23:59:59").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = saleEnd - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    days+"d : "+hours+"h : "+minutes+"m : "+seconds+"s";

},1000);