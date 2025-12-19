'use strict';

const countriesContainer = document.querySelector('.countries');

let wishlist = [];  // Create an empty array to store wishlist items
let cart = []; // Create an empty array to store cart items

function render(products) {
    const row = document.createElement("div");  // Create a row container
    row.classList.add("row", "g-4", "m-3");  // Bootstrap row with gap

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add('col-md-3');  // Set column size to 3 (4 cards per row)
        card.innerHTML = `
            <div class="card h-100">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="max-height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}</p>
                    <p class="card-text">${product.price}$</p>
                    <button class="btn btn-primary add-to-cart-btn" data-id = "${product.id}">Add to Cart</button>
                    <p class="card-text">${product.stock} items in stock</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                <button class="btn btn-outline-danger wishlist-btn" data-id="${product.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 15s-3.315-3.124-5.657-5.193C.636 8.084 0 6.9 0 5.5 0 3.42 1.5 2 3.5 2c1.136 0 2.195.43 3 1.122C7.805 2.43 8.864 2 10 2c2 0 3.5 1.42 3.5 3.5 0 1.4-.636 2.584-2.343 4.307C11.315 11.876 8 15 8 15z"/>
                    </svg>
                </button>
                </div>                
            </div>
        `;
        row.appendChild(card);  // Append each card to the row
    });

    countriesContainer.appendChild(row);  // Append the row to the container
    countriesContainer.style.opacity = 1;  // Make the container visible

    // Add event listener to "Add to cart" button to add items

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(){
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, products);
        });
    });

    // Add event listener to "fav icon" to change color and add items

    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function(){
            const productId = parseInt(this.getAttribute('data-id'));
            toggleWishlist(productId, products);
            this.classList.toggle('added')
        });
    });

}

// Function adding items to cart

function addToCart(productId, products){
    const product = products.find(p => p.id === productId);
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to your cart`);
}


// Function to add and remove items from wishing list

function toggleWishlist(productId, products){
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);

    if (index === -1){
        wishlist.push(productId)
    }
    else(
        wishlist.splice(index, 1)
    )
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}


const staticPhones = [
    {
        id: 1,
        title: "iPhone 15 Pro Max",
        description: "Apple iPhone 15 Pro Max with titanium design",
        price: 1199,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
        category: "smartphones",
        stock: 15
    },
    {
        id: 2,
        title: "iPhone 15 Pro",
        description: "Apple iPhone 15 Pro with Action Button",
        price: 999,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
        category: "smartphones",
        stock: 20
    },
    {
        id: 3,
        title: "iPhone 15",
        description: "Apple iPhone 15 with Dynamic Island",
        price: 799,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
        category: "smartphones",
        stock: 25
    },
    {
        id: 3,
        title: "iPhone 16 Pro Max",
        description: "Apple iPhone 16 Pro Max with Pro camera system",
        price: 1399,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
        category: "smartphones",
        stock: 18
    },
    {
        id: 5,
        title: "iPhone 14 Pro",
        description: "Apple iPhone 14 Pro with Always-On display",
        price: 999,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
        category: "smartphones",
        stock: 22
    },
    {
        id: 6,
        title: "iPhone 14",
        description: "Apple iPhone 14 with Ceramic Shield",
        price: 699,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
        category: "smartphones",
        stock: 30
    },
    {
        id: 7,
        title: "iPhone 13 Pro Max",
        description: "Apple iPhone 13 Pro Max with ProMotion display",
        price: 1099,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
        category: "smartphones",
        stock: 12
    },
    {
        id: 8,
        title: "iPhone 13 Pro",
        description: "Apple iPhone 13 Pro with Pro camera system",
        price: 899,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
        category: "smartphones",
        stock: 16

    },
     {
        id: 9,
       title: "iPhone 16",
        description: "Apple iPhone 16 with Pro camera system",
        price: 920,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
        category: "smartphones",
        stock: 12

    },
         {
        id: 10,
       title: "iPhone 16 pro",
        description: "Apple iPhone 16 pro with Pro camera system",
        price: 1272,
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
        category: "smartphones",
        stock: 21

    },
    
];

const callData = function() {
    // Only render static phones with real images
    render(staticPhones);
};

callData();
