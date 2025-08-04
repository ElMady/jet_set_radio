document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cartButton');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const shoppingCart = document.getElementById('shoppingCart');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.querySelector('.total-amount');
    
    let cart = [];
    
    // Abrir carrito
    cartButton.addEventListener('click', function() {
        shoppingCart.classList.add('active');
        overlay.classList.add('active');
    });
    
    // Cerrar carrito
    closeCart.addEventListener('click', function() {
        shoppingCart.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Cerrar al hacer clic en el overlay
    overlay.addEventListener('click', function() {
        shoppingCart.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Añadir productos al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            
            // Verificar si el producto ya está en el carrito
            const existingItem = cart.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    quantity: 1
                });
            }
            
            updateCart();
            
            // Mostrar el carrito al añadir un producto
            shoppingCart.classList.add('active');
            overlay.classList.add('active');
        });
    });
    
    // Actualizar el carrito
    function updateCart() {
        // Actualizar la lista de productos
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío</p>';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="item-total">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;
                cartItems.appendChild(cartItemElement);
            });
            
            // Agregar eventos a los botones de eliminar
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const id = button.getAttribute('data-id');
                    cart = cart.filter(item => item.id !== id);
                    updateCart();
                });
            });
        }
        
        // Actualizar contador y total
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
    }
});