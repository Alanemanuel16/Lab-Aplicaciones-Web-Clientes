import { getFromLocalStorage, removeFromLocalStorage } from "./storage/storage.js";
import { RenderCartList } from "./cartList.js";

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

    cart.forEach(item => {
        total += item.price * item.qtty;
        totalQtty += item.qtty;
    });

    container.innerHTML = RenderCartList(cart) + `
    <h5 class="mt-3 mb-0">Total: USD $${total.toFixed(2)}</h5>`;
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