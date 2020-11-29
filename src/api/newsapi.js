import { NEWS_API_KEY } from '../config';


// const BASE_API =`http://newsapi.org/v2`;
// const getPosts = (type = 'everything', params) => {
//     const searchParams = new URLSearchParams({ apiKey: API_KEY, ...params })
//     return fetch (`${BASE}/${type}?${searchParams.toString()}`)
// }

let cache = new Map();

const BASE = 'https://newsapi.org/v2/everything';

export const getPostsFetch = async (param = '') => {
    if (cache.has(param)) {
        return cache.get(param);
    }

    let query = `?language=en&sortBy=publishedAt&page=1&apiKey=${NEWS_API_KEY}`;
    if (param) {
        query += `&q=${param}`;
    } else {
        query += `&domains=techcrunch.com`;
    }
    const response = await fetch(`${BASE}${query}`);
    const body = await response.json();
    cache.set(param, body);
    return body;
};