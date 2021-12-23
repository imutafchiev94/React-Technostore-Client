const baseUrl = 'http://localhost:5000/api';

export function getLatestProducts() {
    return fetch(`${baseUrl}/product/getlatest`)
    .then(res => res.json());
}

export function getMostRatedProducts() {
    return fetch(`${baseUrl}/product/mostrated/products`)
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

export function getAllProducts() {
    return fetch(`${baseUrl}/product/`)
    .then(res => res.json());
}

export function createProduct(productData, imageUrl) {
    console.log({...productData, imageUrl});
    return fetch(`${baseUrl}/product/create`, 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json' }, 
    body: JSON.stringify({...productData, imageUrl})})
    .then(res => res.json());
}

export function editProduct(productId, productData, imageUrl) {
    return fetch(`${baseUrl}/product/${productId}/edit`, 
    {method: 'PATCH', 
    headers: {'Content-Type': 'application/json' }, 
    body: JSON.stringify({...productData, imageUrl})})
    .then(res => res.json());
}

export function deleteProduct(productId) {
    return fetch(`${baseUrl}/product/${productId}`, 
    {method: 'PATCH', 
    headers: {'Content-Type': 'application/json' }})
    .then(res => res.json());
}

export function addReview(productId, reviewData) {
    return fetch(`${baseUrl}/review/add/${productId}`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json' }, 
        body: JSON.stringify({...reviewData})})
        .then(res => res.json());
}