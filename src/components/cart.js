import { getFromLocalStorage, removeFromLocalStorage } from "./storage/storage.js";

export function RenderCart() {
    const container = document.querySelector('#cart-container');
    const cart = getFromLocalStorage();

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-muted">El carrito está vacío.</p>`;
        updateBadge(0);
        return;
    }

    let total = 0;
    let totalQtty = 0;
    let template = `<ul class="list-group list-group-flush">`;

    cart.forEach(item => {
        const subtotal = item.price * item.qtty;
        total += subtotal;
        totalQtty += item.qtty;
        template += `
        <li class="list-group-item d-flex align-items-center gap-3">
            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: contain;">
            <div class="flex-grow-1">
                <h6 class="mb-0 text-truncate">${item.title}</h6>
                <small class="text-dark fw-semibold">USD $${item.price} x ${item.qtty}</small>
            </div>
            <strong>USD $${subtotal.toFixed(2)}</strong>
            <button class="btn btn-outline-danger btn-sm" data-remove="${item.id}">Quitar</button>
        </li>
        `;
    });

    template += `</ul>
    <h5 class="mt-3 mb-0">Total: USD $${total.toFixed(2)}</h5>`;

    container.innerHTML = template;
    updateBadge(totalQtty);

    cart.forEach(item => {
        const btn = container.querySelector(`[data-remove="${item.id}"]`);
        btn.addEventListener('click', () => {
            removeFromLocalStorage(item.id);
            RenderCart();
        });
    });
}

function updateBadge(totalQtty) {
    const badge = document.querySelector('#cartBadge');
    if (badge) {
        badge.textContent = totalQtty;
    }
    const cartCount = document.querySelector('#cartCount');
    if (cartCount) {
        cartCount.textContent = getFromLocalStorage().length;
    }
}