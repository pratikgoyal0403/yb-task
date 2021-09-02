const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    const result = await response?.json();
    return new Promise((resolve, reject) => {
        if(response.status >= 400) {
            reject(response);
        }else {
            resolve(result);
        }
    })
}