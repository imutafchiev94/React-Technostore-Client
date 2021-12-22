const baseUrl = 'https://technostore-server.herokuapp.com/api';

export function getLatestProducts() {
    return fetch(`${baseUrl}/product/getlatest`)
    .then(res => res.json());
}

export function getMostRatedProducts() {
    return fetch(`${baseUrl}/product/mostrated`)
    .then(res => res.json());
}

export function getAllBrands(subCategoryId) {
    return fetch(`${baseUrl}/product/${subCategoryId}/brands`)
    .then(res => res.json());
}

export function getAllProductsFromSubCategory(subCategoryId) {
    return fetch(`${baseUrl}/product/subcategory/${subCategoryId}`)
    .then(res => res.json());
}

export function getProduct(productId) {
    return fetch(`${baseUrl}/product/${productId}`)
    .then(res => res.json());
}

export function addRate(productId, rate) {
    return fetch(`${baseUrl}/product/rate`, {method: 'POST', headers: {'Content-Type': 'application/json' }, body: JSON.stringify({"productId": `${productId}`, 'rate': rate})})
    .then(res => res.json())
}