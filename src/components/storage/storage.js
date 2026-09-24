const STORAGE_KEY = 'cart';


export function initLocalStorege(){
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        return;
    }
    try {
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        }
    } catch (e) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}


export function getFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}



export function saveToLocalStorage(item){
    let cart = getFromLocalStorage();
    cart.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


