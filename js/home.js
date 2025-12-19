'use strict';

const countriesContainer = document.querySelector('.countries');

let wishlist = [];  // Create an empty array to store wishlist items
let cart = []; // Create an empty array to store cart items
let allProducts = []; // Store all products for searching

function render(products) {
    // Clear previous content
    countriesContainer.innerHTML = '';

    if (products.length === 0) {
        countriesContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

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

    // Add eventlistener to wishlist button that change the color

    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));  // Get product ID from data-id
            toggleWishlist(productId, products);
            this.classList.toggle('added');  // Toggle the class to visually indicate it's added
        });
    });

    // Add event listener to "Add to cart" button.

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener("click", function(){
            const productId = parseInt(this.getAttribute('data-id')); //get product by id
            addToCart(productId, products);

    })
})

}


// Function to add product to the cart

function addToCart(productId, products){
    const product = products.find(p => p.id === productId);
    cart.push(product); // Add the product to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart in the storage
    alert(`${product.title} has been added to your cart`);
    console.log('Current Cart: ', cart);
    
}


// Function to handle adding/removing products to/from the wishlist
function toggleWishlist(productId, products) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);

    if (index === -1) {
        wishlist.push(product);  // Add product to wishlist
        console.log(`${product.title} added to wishlist`);
    } else {
        wishlist.splice(index, 1);  // Remove product from wishlist
        console.log(`${product.title} removed from wishlist`);
    }
    // Save the updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    console.log('Current Wishlist:', wishlist);
}



// Function to perform search
function performSearch(query) {
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    render(filteredProducts);
}

// Add event listener for search form
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('form[role="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            } else {
                render(allProducts); // Show all if empty search
            }
        });
    }
});

const staticIPhones = [
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
        id: 4,
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
    }
];

const callData = async function() {
    try {
        const accessoriesResponse = await fetch('https://dummyjson.com/products/category/mobile-accessories');
        const accessoriesData = await accessoriesResponse.json();

        const combinedProducts = [...staticIPhones, ...accessoriesData.products];
        console.log(combinedProducts);  // Display the combined list of products
        allProducts = combinedProducts; // Store all products
        render(combinedProducts);  // Pass the combined products array to render function
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

callData();
