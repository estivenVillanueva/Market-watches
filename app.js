const products = [
    { id: 101, brand: 'Rolex', category: 'luxury', price: 5000, img: '/img/roexlport2.jpg' },
    { id: 102, brand: 'Omega', category: 'luxury', price: 20000, img: '/img/omega.webp' },
    { id: 103, brand: 'Cartier', category: 'luxury', price: 30000, img: '/img/cartier.jfif' },
    { id: 104, brand: ' Philippe', category: 'luxury', price: 100000, img: '/img/Patek Philippe.jpg' },
    { id: 105, brand: 'Audemars ', category: 'luxury', price: 5000, img: '/img/Audemars Piguet.webp' },
    { id: 106, brand: 'Breitling', category: 'sports', price: 15000, img: '/img/Breitling.jpg' },
    { id: 107, brand: 'TAG Heuer', category: 'sports', price: 10000, img: '/img/TAG Heuer.jpg' },
    { id: 108, brand: 'Tissot', category: 'classic', price: 3000, img: '/img/Tissot.webp' },
    { id: 109, brand: 'Longines', category: 'classic', price: 5000, img: '/img/Longines.webp' },
    { id: 110, brand: 'Rado', category: 'classic', price: 5000, img: '/img/Rado.jpg' },
    { id: 111, brand: 'Swatch', category: 'accessible', price: 500, img: '/img/Swatch.webp' },
    { id: 112, brand: 'Fossil', category: 'accessible', price: 500, img: '/img/Fossil.jpg' },
    { id: 113, brand: 'Skagen', category: 'accessible', price: 500, img: '/img/Skagen.webp' },
    { id: 114, brand: ' Wellington', category: 'accessible', price: 200, img: '/img/Daniel Wellington.webp' },
    { id: 115, brand: 'Breguet', category: 'luxury', price: 100000, img: '/img/Breguet.jpg' },
    { id: 116, brand: 'Movado', category: 'classic', price: 1000, img: '/img/Movado.jpg' },
    { id: 117, brand: 'Constantin', category: 'luxury', price: 100000, img: '/img/Vacheron Constantin.jpg' },
    { id: 118, brand: 'LeCoultre', category: 'luxury', price: 5000, img: '/img/Jaeger-LeCoultre.jpg' },
    { id: 119, brand: 'IWC', category: 'luxury', price: 20000, img: '/img/IWC.jpg' },
    { id: 120, brand: ' Mille', category: 'luxury', price: 60000, img: 'img/rimil.png' },
];

let cart = [];

function renderProducts() {
    const container = document.querySelector('.container-watches');
    container.innerHTML = ''; 

    products.forEach(product => {
        const watchDiv = document.createElement('div');
        watchDiv.classList.add('watches');

        watchDiv.innerHTML = `
            <div class="img-watches">
                <img src="${product.img}" alt="${product.brand}">
            </div>
            <div class="info-watches">
                <h2>${product.brand}</h2>
                <h4>Category: ${product.category}</h4>
                <p class="price">$${product.price.toLocaleString()}</p>
                <button onclick="addToCart(${product.id})">Add to cart</button>
            </div>
        `;
        container.appendChild(watchDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.brand} - $${item.price.toLocaleString()} x ${item.quantity} 
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = `Total: $${total.toLocaleString()}`;
}

function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.id === productId);

    if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity--;

        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1);
        }
    }

    renderCart();
}


renderProducts();