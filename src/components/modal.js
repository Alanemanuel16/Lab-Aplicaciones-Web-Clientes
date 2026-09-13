export function Modal(p){

    let container = document.querySelector('#productModal');

    let template = `
     <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="productModalLabel">${p.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
            <div class="row">
            <div class="col-md-6">
             <img src="${p.image}" class="img-fluid mb-3" alt="${p.title}" style="max-height: 300px; object-fit: contain;">
            </div>
            <div class="col-md-6>
            <p class="card-text">${p.description}</p>
            </div>
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
  `;

  container.innerHTML = template;

  const bootstrapModal = new bootstrap.Modal(container);
  bootstrapModal.show();

}