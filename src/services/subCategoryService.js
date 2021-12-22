const baseUrl = 'http://localhost:5000/api';

export function getAll() {
    return fetch(`${baseUrl}/subcategory`)
    .then(res => 
        res.json());
}

export function getSubCategory(subCategoryId) {
    return fetch(`${baseUrl}/subcategory/${subCategoryId}`)
    .then(res => res.json());
}

export function createSubCategory(subCategoryData) {
    return fetch(`${baseUrl}/subcategory/create`, {method:"POST", headers: {
        'content-type': "application/json"},
        body: JSON.stringify({...subCategoryData})
    }).then(res => res.json());
}

export function editSubCategory(subCategoryId, subCategoryData) {
    return fetch(`${baseUrl}/subcategory/${subCategoryId}/edit`, {method: "PATCH", headers: {
        'content-type': 'application/json'}, 
        body: JSON.stringify({...subCategoryData})
    }).then(res => res.json());
}

export function deleteSubCategory(subCategoryId) {
    return fetch(`${baseUrl}/subcategory/${subCategoryId}`, {method: "PATCH", headers: {
        'content-type': 'application/json'}
    }).then(res => res.json());
}