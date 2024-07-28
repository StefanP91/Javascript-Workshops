const products = [
    { name: "Apple", price: 1 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 },
    { name: "Grapes", price: 2 },
];

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let cardContainer = document.getElementById("cardContainer");
cardContainer.classList.add("container", "d-flex", "justify-content-between", "mt-5", "gap-3");


for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let card = document.createElement("div");
    card.classList.add("card", "w-100", "text-center");
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="btn btn-primary" onclick="addToCart(${i})">Add to cart</button>
    `;
    cardContainer.appendChild(card);
}


let cartContainer = document.getElementById("cartContainer");
cartContainer.classList.add("dropdown");
cartContainer.style.display = "none";

let button = document.createElement("button");
button.classList.add("btn", "btn-primary", "dropdown-toggle");
button.setAttribute("data-bs-toggle", "dropdown");
button.innerHTML = `<i class="bi bi-cart4"></i>`;
cartContainer.appendChild(button);

let cart = document.createElement("ul")
    cart.classList.add("dropdown-menu",);
    cartContainer.appendChild(cart);
   
    
function displayItem(index) {
    let product = cartProducts[index];
    let cartItem = document.createElement("li");
    cartItem.classList.add("dropdown-item");
    cartItem.id = `cart-item-${index}`;
    cartItem.innerHTML = `
    ${product.name} - $${product.price} <button class="btn btn-danger" onclick="removeFromCart('${index}')">Remove</button>
    `;
    cart.appendChild(cartItem);
}

function addToCart(index) {
    cartAppear();
    cartProducts.push(products[index]);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    displayItem(cartProducts.length - 1);
}

function cartAppear() {
    if (cartContainer.style.display === "none") {
        cartContainer.style.display = "block";
    }
}

function removeFromCart(index) {

    cartProducts.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    updateCartDisplay();
}

function updateCartDisplay() {
    cart.innerHTML = "";
    cartProducts.forEach((product, index) => {
        displayItem(index);
    });
}

window.addEventListener("DOMContentLoaded", function (){
    if (cartProducts.length > 0) {
        cartAppear();
    }

    cartProducts.forEach((product, index) => {
        displayItem(index);
    });
});
    