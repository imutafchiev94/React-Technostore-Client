const baseUrl = 'http://localhost:5000/api';

export function getAll() {
    return fetch(`${baseUrl}/category`)
    .then(res => res.json());
}

export function create(categoryData) {
    return fetch(`${baseUrl}/category/create`, {method: "POST", headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({...categoryData})
    }).then(res => res.json());
}

export function editCategory(categoryId, categoryData) {
    return fetch(`${baseUrl}/category/${categoryId}/edit`, {method: "PATCH", headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({...categoryData})
    }).then(res => res.json())
}

export function deleteCategory(categoryId) {
    return fetch(`${baseUrl}/category/${categoryId}`, {method: "PATCH", headers: {
        'content-type': 'application/json',
    }}).then(res => res.json());
}

export function getCategory(categoryId) {
    return fetch(`${baseUrl}/category/${categoryId}`)
    .then(res => res.json());
}