const apiRoot = 'http://localhost:1337/kanec.co.uk/wp-json/wp/v2/';

export function get(query) {
    return fetch(apiRoot + query)
        .then(function(response) {
            return response.json();
        });
}
