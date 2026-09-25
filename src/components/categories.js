export const CATEGORIES = [
  { label: "Bolsos" },
  { label: "Remeras" },
  { label: "Chaquetas" },
  { label: "Anillos" },
  { label: "Monitores" },
  { label: "SSD" },
];

export function categoryForProduct(product) {
    const title = product.title.toLowerCase();
    const category = product.category.toLowerCase();

    if (title.includes('ssd') || title.includes('hard drive') || title.includes('gaming drive')) return 'SSD';
    if (title.includes('backpack')) return 'Bolsos';
    if (title.includes('jacket')) return 'Chaquetas';
    if (title.includes('monitor')) return 'Monitores';
    if (category === 'jewelery') return 'Anillos';
    if (title.includes('shirt') || title.includes('t-shirt') || title.includes('boat neck') || title.includes('moisture') || title.includes('tee')) return 'Remeras';
    if (category === "men's clothing" || category === "women's clothing") return 'Remeras';
    return null;
}