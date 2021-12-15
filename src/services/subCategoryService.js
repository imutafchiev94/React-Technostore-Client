const baseUrl = 'https://tecnostore-server.herokuapp.com/api';

export function getAll() {
    return fetch(`${baseUrl}/subcategory`)
    .then(res => 
        res.json());
}