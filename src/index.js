import { RenderCards } from "./components/cards.js";
import { initLocalStorege } from "./components/storage/storage.js";
import { RenderCart } from "./components/cart.js";

initLocalStorege();
RenderCards();
RenderCart();

