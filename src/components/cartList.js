export function RenderCartList(cart) {
    let template = `<div class="row g-3">`;

    cart.forEach(item => {
        const subtotal = item.price * item.qtty;
        template += `
        <div class="col-12">
            <div class="card">
                <div class="card-body d-flex align-items-center gap-3">
                    <img src="${item.image}" class="rounded" alt="${item.title}" style="width: 60px; height: 60px; object-fit: contain; flex-shrink: 0;">
                    <div class="flex-grow-1" style="min-width: 0;">
                        <h6 class="card-title mb-1 text-truncate">${item.title}</h6>
                        <small class="text-dark fw-semibold">USD $${item.price}</small>
                        <small class="text-muted d-block">Cantidad: ${item.qtty} unidades</small>
                    </div>
                    <div class="text-end">
                        <strong class="d-block">USD $${subtotal.toFixed(2)}</strong>
                        <button class="btn btn-outline-danger btn-sm mt-1 border-0" data-remove="${item.id}">
                            <i class="bi bi-trash3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    template += `</div>`;

    return template;
}