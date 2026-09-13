export function Modal(p){

    let container = document.querySelector('#productModal');

    let template = `
     <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="productModalLabel">${p.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                    <div class="row g-3 align-items-start">
                    <div class="col-md-4">
                        <img src="${p.image}" class="img-fluid rounded" alt="${p.title}">
                    </div>
                    <div class="col-md-8">
                        <p class="card-text mb-0">${p.description}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex">
                <span class="badge text-bg-primary me-auto ms-1 mb-1 mt-1">$${p.price}</span>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar al carrito</button>
            </div>
        </div>
    </div>
  `;

  container.innerHTML = template;

  const bootstrapModal = new bootstrap.Modal(container);
  bootstrapModal.show();

}