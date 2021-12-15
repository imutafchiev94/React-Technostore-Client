const baseUrl = 'https://tecnostore-server.herokuapp.com/api';

export function getLatestProducts() {
    return fetch(`${baseUrl}/product/getlatest`)
    .then(res => res.json());
}

export function getMostRatedProducts() {
    return fetch(`${baseUrl}/product/mostrated`)
    .then(res => res.json());
}