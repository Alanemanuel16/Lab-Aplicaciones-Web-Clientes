import { getProducts } from "./services/api.js";
import { Modal } from "./modal.js";
import { CATEGORIES } from "./categories.js";

let products = [];

export function RenderCards() {
    let productslist = document.querySelector('#products-list');

    getProducts().then((data) => {
        products = data;
        renderList(products);
    });
}

function renderList(list) {
    let productslist = document.querySelector('#products-list');

    if (list.length === 0) {
        productslist.innerHTML = `<div class="col-12"><p class="text-muted text-center">No se encontraron productos.</p></div>`;
        return;
    }

    let template = ``;

    list.forEach(p => {
        template += `
        <div class="col">
            <div class="card justify-content-center aling item center h-100">
                <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 180px; width: 100%; object-fit: contain; padding: 0.75rem;">
                <div class="card-body" style="h-100">
                    <h5 class="card-title text-truncate">${p.title}</h5>
                    <span class="text-dark fw-semibold">USD $${p.price}</span>
                </div>
                <div class="mb-3 text-center">
                
                    <button class="btn btn-dark" id="btn-${p.id}"> Mas detalles</button>
                
                </div>
            </div>
        </div>
    `;
    });

    productslist.innerHTML = template;

    list.forEach((p) => {
        let btn = document.querySelector(`#btn-${p.id}`);
        btn.addEventListener('click', () => {
            console.log(`click en ${p.id}`);
            Modal(p);
        });
    });
}

export function filterByCategory(label) {
    if (!label) {
        renderList(products);
        return;
    }
    const cat = CATEGORIES.find(c => c.label === label);
    if (!cat) return;
    const filtered = products.filter(p => {
        const t = p.title.toLowerCase();
        return cat.keywords.some(k => t.includes(k));
    });
    renderList(filtered);
}

export function filterBySearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
        renderList(products);
        return;
    }
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
    renderList(filtered);
}

export function getProductsList() {
    return products;
}