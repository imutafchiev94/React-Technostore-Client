const baseUrl = 'http://localhost:5000/api';

export function register(userData) {
    console.log(userData);
    return fetch(`${baseUrl}/auth/register`, 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json' }, 
    body: JSON.stringify({...userData,})})
    .then(res => res.json());
}

export function login(userData) {
    return fetch(`${baseUrl}/auth/login`, 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json' }, 
    body: JSON.stringify({...userData,})})
    .then(res => res.json());
}

export function logout() {
    return fetch(`${baseUrl}/auth/logout`)
}