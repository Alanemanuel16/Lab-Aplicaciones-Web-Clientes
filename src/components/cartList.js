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
                        <div class="d-flex align-items-center gap-2 mt-1">
                            <button class="btn btn-outline-dark btn-sm px-2" data-dec="${item.id}">-</button>
                            <span class="fw-semibold">${item.qtty}</span>
                            <button class="btn btn-outline-dark btn-sm px-2" data-inc="${item.id}">+</button>
                        </div>
                    </div>
                    <div class="text-end">
                        <strong class="d-block">USD $${subtotal.toFixed(2)}</strong>
                        <button class="border-0 bg-transparent p-1" data-remove="${item.id}">
                            <i class="bi bi-trash3-fill text-danger fs-5"></i>
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