export function store_car() {
    const bottomButton = document.querySelector('.bottom_button');
    const storeMenu = document.getElementById('storeMenu');
    const overlay = document.getElementById('overlay');
    const closeButton = document.querySelector('.close-menu-btn');
    const storeItems = document.getElementById('storeItems');
    const cartCounter = document.getElementById('cartCounter');
    
    let itemCount = 0;

    // Función para actualizar el contador
    function updateCounter() {
        cartCounter.textContent = itemCount;
        // Mostrar u ocultar el contador según si hay items
        cartCounter.style.display = itemCount > 0 ? 'inline-block' : 'none';
    }

    // Función para agregar productos al carrito
    function addToCart(productElement) {
        const productImg = productElement.querySelector('img').src;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('.car_function p').textContent.replace('Price: ', '');
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${productImg}" alt="${productName}">
            <div>
                <h4>${productName}</h4>
                <p>${productPrice}</p>
            </div>
            <button class="remove-item-btn">×</button>
        `;
          const removeBtn = cartItem.querySelector('.remove-item-btn');
        removeBtn.addEventListener('click', () => {
            cartItem.remove();
            itemCount--;
            updateCounter();
        });
        storeItems.appendChild(cartItem);
        
        // Incrementar el contador
        itemCount++;
        updateCounter();
    }

    // Event listeners para los botones "Añadir"
    document.querySelectorAll('.add_button').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            addToCart(product);
        });
    });

    if (bottomButton && storeMenu && overlay && closeButton) {
        bottomButton.addEventListener('click', () => {
            storeMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
        });

        closeButton.addEventListener('click', () => {
            storeMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // Inicializar el contador
    updateCounter();
}