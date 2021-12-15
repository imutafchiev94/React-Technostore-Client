const baseUrl = 'https://tecnostore-server.herokuapp.com/api';

export function getAll() {
    return fetch(`${baseUrl}/category`)
    .then(res => res.json());
}