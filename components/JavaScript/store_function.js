export function store_car() {
    // 1. Selección segura de elementos con verificación
    const elements = {
        bottomButton: document.querySelector('.bottom__button'),
        store__Menu: document.getElementById('store__Menu'),
        overlay: document.getElementById('overlay'),
        closeButton: document.querySelector('.store__Menu--header--closebtn'),
        storeItems: document.getElementById('storeItems'),
        carCounter: document.getElementById('carCounter'),
        addButtons: document.querySelectorAll('.add_button')
    };

    // 2. Verificación exhaustiva de elementos requeridos
    const requiredElements = ['bottomButton', 'store__Menu', 'overlay', 'closeButton', 'storeItems', 'carCounter'];
    const missingElements = requiredElements.filter(key => !elements[key]);

    if (missingElements.length > 0) {
        console.warn('Elementos faltantes para el carrito:', missingElements);
        return; // Salir si faltan elementos esenciales
    }

    // 3. Extraer elementos ya verificados
    const {
        bottomButton,
        store__Menu,
        overlay,
        closeButton,
        storeItems,
        carCounter,
        addButtons
    } = elements;

    let itemCount = 0;

    // 4. Función protegida para actualizar contador
    const updateCounter = () => {
        try {
            carCounter.textContent = itemCount;
            carCounter.style.visibility = itemCount > 0 ? 'visible' : 'hidden';
        } catch (error) {
            console.error('Error actualizando contador:', error);
        }
    };

    // 5. Función segura para añadir productos
    const addToCart = (productElement) => {
        try {
            // Verificación de elementos del producto
            const productImg = productElement.querySelector('img')?.src;
            const productName = productElement.querySelector('h3')?.textContent;
            const priceElement = productElement.querySelector('.catalogo__productos--description--button p');
            const productPrice = priceElement?.textContent.replace('Price: ', '');

            if (!productImg || !productName || !productPrice) {
                throw new Error('Elementos del producto no encontrados');
            }

            // Creación del item del carrito
            const cartItem = document.createElement('div');
            cartItem.className = 'store__Menu--list--items';
            cartItem.innerHTML = `
                <img src="${productImg}" alt="${productName}">
                <div class="store__Menu--list--items--info">
                    <h4>${productName}</h4>
                    <p>${productPrice}</p>
                </div>
                <button class="remove-item-btn" aria-label="Eliminar producto">×</button>
            `;

            // Evento para eliminar producto
            const removeBtn = cartItem.querySelector('.remove-item-btn');
            removeBtn.addEventListener('click', () => {
                cartItem.remove();
                itemCount = Math.max(0, itemCount - 1); // Prevenir valores negativos
                updateCounter();
            });

            storeItems.appendChild(cartItem);
            itemCount++;
            updateCounter();
        } catch (error) {
            console.error('Error añadiendo al carrito:', error);
        }
    };

    // 6. Event listeners protegidos para botones "Añadir"
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.currentTarget.closest('.catalogo__productos');
            if (product) {
                addToCart(product);
            } else {
                console.warn('No se encontró el producto asociado al botón');
            }
        });
    });

    // 7. Control del menú lateral
    bottomButton.addEventListener('click', () => {
        store__Menu.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    closeButton.addEventListener('click', () => {
        store__Menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    // 8. Inicialización
    updateCounter();
}