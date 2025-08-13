// Product Data (simulated database)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 99.99,
        oldPrice: 129.99,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 50,
        badge: "sale"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 199.99,
        description: "Track your fitness and stay connected with this advanced smart watch.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 30,
        badge: "new"
    },
    {
        id: 3,
        name: "Travel Backpack",
        category: "Accessories",
        price: 49.99,
        description: "Durable and spacious backpack perfect for travel and everyday use.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 100
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 79.99,
        oldPrice: 99.99,
        description: "Portable Bluetooth speaker with crisp sound and 20-hour battery.",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 40,
        badge: "sale"
    },
    {
        id: 5,
        name: "Running Shoes",
        category: "Footwear",
        price: 89.99,
        description: "Lightweight running shoes with superior cushioning and support.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 60,
        badge: "best"
    },
    {
        id: 6,
        name: "Coffee Maker",
        category: "Home",
        price: 129.99,
        description: "Programmable coffee maker with thermal carafe and timer.",
        image: "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 25
    },
    {
        id: 7,
        name: "Yoga Mat",
        category: "Fitness",
        price: 29.99,
        oldPrice: 39.99,
        description: "Eco-friendly yoga mat with superior grip and cushioning.",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 80,
        badge: "sale"
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 59.99,
        description: "True wireless earbuds with touch controls and charging case.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 45,
        badge: "new"
    },
    {
        id: 9,
        name: "Desk Lamp",
        category: "Home",
        price: 39.99,
        description: "Adjustable LED desk lamp with multiple brightness levels.",
        image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 35
    },
    {
        id: 10,
        name: "Water Bottle",
        category: "Accessories",
        price: 24.99,
        description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 120,
        badge: "best"
    },
    {
        id: 11,
        name: "Laptop Stand",
        category: "Electronics",
        price: 34.99,
        description: "Adjustable laptop stand for ergonomic computing.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 55
    },
    {
        id: 12,
        name: "Fitness Tracker",
        category: "Electronics",
        price: 69.99,
        oldPrice: 89.99,
        description: "Track steps, heart rate, and sleep with this comfortable fitness band.",
        image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        stock: 30,
        badge: "sale"
    }
];

// Chatbot responses
const chatbotResponses = [
    "We offer free shipping on orders over $50.",
    "You can track your order using the link in your confirmation email.",
    "That product is currently in stock!",
    "We accept Visa, Mastercard, PayPal, and Apple Pay.",
    "Our customer service team is available 24/7 to help you.",
    "Yes, we offer international shipping to most countries.",
    "The estimated delivery time is 3-5 business days.",
    "You can change your order within 1 hour of placing it.",
    "All our products come with a 1-year warranty."
];

// Simulated orders data
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const featuredProducts = document.getElementById('featuredProducts');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummary = document.getElementById('checkoutSummary');
const orderConfirmation = document.getElementById('orderConfirmation');
const confirmationOverlay = document.getElementById('confirmationOverlay');
const closeConfirmation = document.getElementById('closeConfirmation');
const orderDetails = document.getElementById('orderDetails');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatbot = document.getElementById('chatbot');
const chatbotToggle = document.getElementById('chatbotToggle');
const closeChatbot = document.getElementById('closeChatbot');
const themeToggle = document.getElementById('themeToggle');
const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');
const closeAdmin = document.getElementById('closeAdmin');
const totalProducts = document.getElementById('totalProducts');
const totalOrders = document.getElementById('totalOrders');
const totalRevenue = document.getElementById('totalRevenue');
const activeUsers = document.getElementById('activeUsers');
const recentOrders = document.getElementById('recentOrders');
const addProductForm = document.getElementById('addProductForm');

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// Render products
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badge = '';
        if (product.badge === 'sale') {
            badge = '<div class="product-badge sale">SALE</div>';
        } else if (product.badge === 'new') {
            badge = '<div class="product-badge new">NEW</div>';
        } else if (product.badge === 'best') {
            badge = '<div class="product-badge">BEST</div>';
        }
        
        let oldPrice = '';
        if (product.oldPrice) {
            oldPrice = `<span class="product-price old">$${product.oldPrice.toFixed(2)}</span>`;
        }
        
        productCard.innerHTML = `
            ${badge}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">
                    ${oldPrice}
                    $${product.price.toFixed(2)}
                </p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-outline btn-sm view-details" data-id="${product.id}">Details</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners to new buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Render featured products
function renderFeaturedProducts() {
    featuredProducts.innerHTML = '';
    const featured = products.slice(0, 3);
    featured.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        let badge = '';
        if (product.badge === 'sale') {
            badge = '<div class="product-badge sale">SALE</div>';
        } else if (product.badge === 'new') {
            badge = '<div class="product-badge new">NEW</div>';
        } else if (product.badge === 'best') {
            badge = '<div class="product-badge">BEST</div>';
        }
        
        let oldPrice = '';
        if (product.oldPrice) {
            oldPrice = `<span class="product-price old">$${product.oldPrice.toFixed(2)}</span>`;
        }
        
        productCard.innerHTML = `
            ${badge}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">
                    ${oldPrice}
                    $${product.price.toFixed(2)}
                </p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-outline btn-sm view-details" data-id="${product.id}">Details</button>
                </div>
            </div>
        `;
        featuredProducts.appendChild(productCard);
    });
    
    // Add event listeners to featured product buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showToast(`${product.name} added to cart`);
}

// Update cart UI
function updateCart() {
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Render cart items
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="btn btn-outline btn-sm decrease-item" data-id="${item.id}">-</button>
                    <input type="number" class="cart-item-qty" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="btn btn-outline btn-sm increase-item" data-id="${item.id}">+</button>
                    <button class="btn btn-outline btn-sm remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    // Update total
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.decrease-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.increase-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    document.querySelectorAll('.cart-item-qty').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const newQuantity = parseInt(e.target.value);
            setCartItemQuantity(productId, newQuantity);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity < 1) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

// Set cart item quantity
function setCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (quantity < 1) {
        removeFromCart(productId);
    } else {
        item.quantity = quantity;
        updateCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showToast('Item removed from cart');
}

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Filter and sort products
function filterAndSortProducts() {
    let filteredProducts = [...products];
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    const category = categoryFilter.value;
    if (category) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }
    
    // Sort products
    const sortOption = sortBy.value;
    switch (sortOption) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Default sorting (by ID)
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts(filteredProducts);
}

// Populate category filter
function populateCategories() {
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Initialize checkout summary
function initCheckoutSummary() {
    let summaryHTML = '<h3>Order Summary</h3>';
    let total = 0;
    
    cart.forEach(item => {
        summaryHTML += `
            <div class="checkout-summary-row">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
        total += item.price * item.quantity;
    });
    
    summaryHTML += `
        <div class="checkout-summary-total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
    
    checkoutSummary.innerHTML = summaryHTML;
}

// Process checkout
function processCheckout(e) {
    e.preventDefault();
    
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        customer: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
        },
        paymentMethod: document.getElementById('paymentMethod').value,
        items: [...cart],
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    };
    
    // Add to orders
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Show confirmation
    showOrderConfirmation(order);
    
    // Clear cart
    cart = [];
    updateCart();
    
    // Close checkout modal
    checkoutModal.classList.remove('open');
    checkoutOverlay.classList.remove('open');
}

// Show order confirmation
function showOrderConfirmation(order) {
    let orderHTML = `
        <p>Thank you for your order!</p>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        <p>We've sent a confirmation email to ${order.customer.email}</p>
    `;
    
    orderDetails.innerHTML = orderHTML;
    orderConfirmation.classList.add('open');
    confirmationOverlay.classList.add('open');
}

// Chatbot functions
function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate bot response after a delay
    setTimeout(() => {
        const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
        addChatMessage(randomResponse, 'bot');
    }, 1000);
}

function addChatMessage(text, sender) {
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Admin panel functions
function updateAdminStats() {
    totalProducts.textContent = products.length;
    totalOrders.textContent = orders.length;
    
    const revenue = orders.reduce((total, order) => total + order.total, 0);
    totalRevenue.textContent = `$${revenue.toFixed(2)}`;
    
    // Simulate active users
    activeUsers.textContent = Math.floor(Math.random() * 1000) + 50;
    
    // Update recent orders
    recentOrders.innerHTML = '';
    const recent = [...orders].reverse().slice(0, 5);
    
    recent.forEach(order => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.customer.name}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>Completed</td>
        `;
        
        recentOrders.appendChild(row);
    });
}

function addNewProduct(e) {
    e.preventDefault();
    
    const newProduct = {
        id: products.length + 1,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        stock: parseInt(document.getElementById('productStock').value)
    };
    
    products.push(newProduct);
    renderProducts(products);
    populateCategories();
    
    // Reset form
    addProductForm.reset();
    
    // Show success message
    showToast('Product added successfully');
    updateAdminStats();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderFeaturedProducts();
    populateCategories();
    updateCart();
    updateAdminStats();
    
    // Cart toggle
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });
    
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty');
            return;
        }
        
        initCheckoutSummary();
        checkoutModal.classList.add('open');
        checkoutOverlay.classList.add('open');
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });
    
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('open');
        checkoutOverlay.classList.remove('open');
    });
    
    checkoutOverlay.addEventListener('click', () => {
        checkoutModal.classList.remove('open');
        checkoutOverlay.classList.remove('open');
    });
    
    checkoutForm.addEventListener('submit', processCheckout);
    
    // Order confirmation
    closeConfirmation.addEventListener('click', () => {
        orderConfirmation.classList.remove('open');
        confirmationOverlay.classList.remove('open');
    });
    
    confirmationOverlay.addEventListener('click', () => {
        orderConfirmation.classList.remove('open');
        confirmationOverlay.classList.remove('open');
    });
    
    // Filters
    searchInput.addEventListener('input', filterAndSortProducts);
    categoryFilter.addEventListener('change', filterAndSortProducts);
    sortBy.addEventListener('change', filterAndSortProducts);
    
    // Chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('open');
    });
    
    closeChatbot.addEventListener('click', () => {
        chatbot.classList.remove('open');
    });
    
    sendMessage.addEventListener('click', sendChatMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Admin panel
    adminToggle.addEventListener('click', () => {
        adminPanel.classList.add('open');
    });
    
    closeAdmin.addEventListener('click', () => {
        adminPanel.classList.remove('open');
    });
    
    // Add product form
    addProductForm.addEventListener('submit', addNewProduct);
}); 