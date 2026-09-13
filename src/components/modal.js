export function Modal(){

    let container = document.querySelector('#productModal');


    let template = `
     <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${getProducts.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${getProducts.image}" class="img-fluid" alt="${getProducts.title}">
      <p>${getProducts.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
 
  `;

  container.innerHTML= template;

  const bootstrapModal = new bootstrap.Modal(container);
  bootstrapModal.show();

}