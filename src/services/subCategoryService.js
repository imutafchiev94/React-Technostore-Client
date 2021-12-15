const baseUrl = 'https://technostore-server.herokuapp.com/api';

export function getAll() {
    return fetch(`${baseUrl}/subcategory`)
    .then(res => 
        res.json());
}