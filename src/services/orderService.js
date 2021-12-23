const baseUrl = 'http://localhost:5000/api';

export function create(orderData, products, token) {

    return fetch(`${baseUrl}/order/create`, {method: "POST", headers: { 'content-type': 'application/json',
        'X-Authorization': token
        },
        body: JSON.stringify({data: orderData, products})
    }).then(res => res.json());
}