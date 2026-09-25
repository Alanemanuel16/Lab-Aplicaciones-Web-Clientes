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
    const index = cart.findIndex(el => el.id === item.id);
    if (index >= 0) {
        cart[index].qtty += item.qtty;
    } else {
        cart.push(item);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function removeFromLocalStorage(itemID) {
    let cart = getFromLocalStorage();
    cart = cart.filter(el => el.id !== itemID);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function updateQuantityLocalStorage(itemID, delta) {
    let cart = getFromLocalStorage();
    const idx = cart.findIndex(el => el.id === itemID);
    if (idx !== -1) {
        cart[idx].qtty += delta;
        if (cart[idx].qtty <= 0) {
            cart.splice(idx, 1);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
}

export function clearLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}

export function updateItemStorage(itemID, qtty) {
    let dataStorage = getFromLocalStorage();
    let idx = dataStorage.findIndex((p) => p.id === itemID);
    if (idx !== -1){
        dataStorage[idx].qtty += qtty;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStorage));
    }
    return idx;
}

