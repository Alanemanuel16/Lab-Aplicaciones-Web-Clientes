export function contador(id) {
    let template = `
    <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button id="decrementBtn-${id}" class="btn btn-dark">-</button>
        <div>
            <p class="mb-0 fs-4"><span id="contador-${id}">0</span></p>
        </div>
        <button id="incrementBtn-${id}" class="btn btn-dark">+</button>
    </div>
    `;

    return template;
}

export function addEventListener(id){
    let btnIncrement = document.querySelector(`#incrementBtn-${id}`);
    let btnDecrement = document.querySelector(`#decrementBtn-${id}`);
    let spanContador = document.querySelector(`#contador-${id}`);
    let count = 0;
    btnIncrement.addEventListener('click', ()=>{
        count++;
        spanContador.textContent = count;
    });
    btnDecrement.addEventListener('click', ()=>{
        if (count > 0) {
            count--;
            spanContador.textContent = count;
        }
    });
}