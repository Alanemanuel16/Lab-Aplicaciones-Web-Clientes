const STORAGE_KEY = 'cart';


export function initLocalStorege(){
    if (!localStorage.getItem(STORAGE_KEY)){
        localStorage.setItem(STORAGE_KEY, JASON.stringify([]));
    }
}