// main.js

// Example product data (replace with your actual product data)
const products = [
    { name: "High-Powered Spy Binoculars", price: 250 },
    { name: "A Ton of Gun", price: 25000000 },
    { name: ".45 Caliber Kobra", price: 1400 },
    { name: "Emu 2.0 Electric Vehicle", price: 12500 },
    { name: "MIUFLY Police Body Camera", price: 9000 },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear existing cart items
    cartItemsElement.innerHTML = "";

    // Populate the cart items
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    // Calculate and display the total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);

    // Saves the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to handle the checkout button click
function checkout() {
    // Add your checkout logic here
    if (cart.length === 0) {
        alert("Your cart is empty. You should add something if you want to check out.");
    } else {
    alert("Thank you for your purchase! Don't get raided by the feds!");
    // Clear the cart after checkout
    cart = [];
    updateCart();
    }
}

// Add event listeners to "Add to Cart" buttons
function handleAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => addToCart(index));
    });
}

//Initializes cart on the shopping cart page
document.addEventListener("DOMContentLoaded", function () {
    handleAddToCartButtons();
    updateCart(); //Updates the cart display
});