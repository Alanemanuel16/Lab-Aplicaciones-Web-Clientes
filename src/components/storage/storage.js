const STORAGE_KEY = 'cart';


export function initLocalStorege(){
    if (!localStorage.getItem(STORAGE_KEY)){
        localStorage.setItem(STORAGE_KEY, JASON.stringify([]));
    }
}


export function getFromLocalStorage() {
    return JASON.parse(localStorage.getItem(STORAGE_KEY));
}



export function saveToLocalStorage(item){
    let cart = getFromLocalStorage();
    cart.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


