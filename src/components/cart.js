import { getFromLocalStorage, removeFromLocalStorage, updateQuantityLocalStorage, clearLocalStorage } from "./storage/storage.js";
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
    <h5 class="mt-3 mb-0">Total: USD $${total.toFixed(2)}</h5>
    <div class="d-grid gap-2 mt-3">
        <button class="btn btn-primary" id="checkoutBtn">Finalizar compra</button>
        <button class="btn btn-outline-danger" id="clearCartBtn">Vaciar carrito</button>
    </div>`;
    updateBadge(totalQtty);

    cart.forEach(item => {
        const incBtn = container.querySelector(`[data-inc="${item.id}"]`);
        const decBtn = container.querySelector(`[data-dec="${item.id}"]`);
        const removeBtn = container.querySelector(`[data-remove="${item.id}"]`);

        incBtn.addEventListener('click', () => {
            updateQuantityLocalStorage(item.id, 1);
            RenderCart();
        });
        decBtn.addEventListener('click', () => {
            updateQuantityLocalStorage(item.id, -1);
            RenderCart();
        });
        removeBtn.addEventListener('click', () => {
            removeFromLocalStorage(item.id);
            RenderCart();
        });
    });

    const checkoutBtn = container.querySelector('#checkoutBtn');
    checkoutBtn.addEventListener('click', () => {
        clearLocalStorage();
        showToast('¡Compra finalizada!');
        RenderCart();
    });

    const clearBtn = container.querySelector('#clearCartBtn');
    clearBtn.addEventListener('click', () => {
        clearLocalStorage();
        showToast('Carrito vaciado');
        RenderCart();
    });
}

function showToast(message) {
    const toastBody = document.querySelector('#cartToast .toast-body');
    if (toastBody) {
        toastBody.textContent = message;
    }
    const toast = new bootstrap.Toast(document.querySelector('#cartToast'));
    toast.show();
}

function updateBadge(totalQtty) {
    const badge = document.querySelector('#cartBadge');
    if (badge) {
        badge.textContent = totalQtty;
    }
    const badgeDesktop = document.querySelector('#cartBadgeDesktop');
    if (badgeDesktop) {
        badgeDesktop.textContent = totalQtty;
    }
    const cartCount = document.querySelector('#cartCount');
    if (cartCount) {
        cartCount.textContent = getFromLocalStorage().length;
    }
}