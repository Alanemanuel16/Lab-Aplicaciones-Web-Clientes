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
    if (navProductos) {
        navProductos.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('products');
            resetFilters();
            document.querySelector('#productos').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }

    const navContacto = document.querySelector('#navContacto');
    if (navContacto) {
        navContacto.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('contact');
            document.querySelector('#contacto').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }

    const navInicio = document.querySelector('#navInicio');
    if (navInicio) {
        navInicio.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('products');
            resetFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const navBrand = document.querySelector('#navBrand');
    if (navBrand) {
        navBrand.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('products');
            resetFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function showSection(section) {
    const products = document.querySelector('#products-list');
    const contact = document.querySelector('#contacto');
    if (section === 'contact') {
        products.classList.add('d-none');
        contact.classList.remove('d-none');
    } else {
        contact.classList.add('d-none');
        products.classList.remove('d-none');
    }
}

function resetFilters() {
    const input = document.querySelector('#searchInput');
    if (input) input.value = '';
    filterBySearch('');
    filterByCategory(null);
}