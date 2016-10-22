import axios from 'axios';
const apiRoot = 'http://localhost:1337/kanec.co.uk/wp-json/wp/v2/';

export function get(url, params = {}) {
    console.log('doing req: ', url, params)
    return axios.get(apiRoot + url, {
        method: 'get',
        params })
        .then(response => response.data)
}
