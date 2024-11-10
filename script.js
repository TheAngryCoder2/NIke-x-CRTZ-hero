
const shoe = document.getElementById("shoe");
const productCard = document.getElementById("product-card");

// Show the product card on mouse enter
shoe.addEventListener("mouseenter", () => {
    productCard.classList.remove("hidden");
});

/* Hide the product card on mouse leave
shoe.addEventListener("mouseleave", () => {
    productCard.classList.add("hidden");
});*/
