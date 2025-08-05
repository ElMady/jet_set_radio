export function store_car() {
    const bottomButton = document.querySelector('.bottom_button');
    const storeMenu = document.getElementById('storeMenu');
    const overlay = document.getElementById('overlay');
    const closeButton = document.querySelector('.close-menu-btn');
    const storeItems = document.getElementById('storeItems');

    // Función para agregar productos al carrito
    function addToCart(productElement) {
        const productImg = productElement.querySelector('img').src;
        const productName = productElement.querySelector('h3').textContent;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${productImg}" alt="${productName}">
            <span>${productName}</span>
        `;
        storeItems.appendChild(cartItem);
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
}