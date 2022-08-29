const url='http://localhost:3000';

const headerOptions = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ localStorage.token 
}

export const login = (data) => {
    return fetch(`${url}/login`, { method: "POST", headers: headerOptions, body: data }).then((res) => res.json());
}

export const getCurrencyAll = () => {
    return httpClient('GET', `${url}/currency`, null);
}

export const postConvert = (data) => {
    return httpClient('POST', `${url}/currency/convert`, data);
}

const httpClient = (method, url, data) =>{
    let config = { method: method, headers: headerOptions };
    (method === 'POST')? config['body'] = data : '';
    return fetch(url, config).then((res) => res.json());
}