import { getProducts } from "../api.js";
export function RenderCards(){
    let productslist = document.querySelector('#products-list');

    getProducts().then((products) => {
        let template = ``;
    
    products.forEach(p => {
        template += `
        <div class="col">
            <div class="card h-100">
                <img src="${p.image}" class="card-img-top" alt="${p.title}">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${p.title}</h5>
                </div>
            </div>
        </div>
    `;
        });
    
            productslist.innerHTML = template;
    });
}