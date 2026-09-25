import { RenderCards, filterByCategory, filterBySearch } from "./components/cards.js";
import { initLocalStorege } from "./components/storage/storage.js";
import { RenderCart } from "./components/cart.js";
import { CATEGORIES } from "./components/categories.js";

initLocalStorege();
RenderCards();
RenderCart();
populateCategories();
setupSearch();
setupNav();

function populateCategories() {
    const menu = document.querySelector('#categoriesMenu');
    if (!menu) return;

    let html = `<li><a class="dropdown-item" href="#" data-cat="all">Todos</a></li>`;
    CATEGORIES.forEach(cat => {
        html += `<li><a class="dropdown-item" href="#" data-cat="${cat.label}">${cat.label}</a></li>`;
    });
    menu.innerHTML = html;

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const label = a.dataset.cat;
            filterByCategory(label === 'all' ? null : label);
        });
    });
}

function setupSearch() {
    const input = document.querySelector('#searchInput');
    if (!input) return;

    input.addEventListener('input', () => {
        filterBySearch(input.value);
    });
}

function setupNav() {
    const navProductos = document.querySelector('#navProductos');
    if (!navProductos) return;

    navProductos.addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.querySelector('#searchInput');
        if (input) input.value = '';
        filterBySearch('');
        filterByCategory(null);

        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}