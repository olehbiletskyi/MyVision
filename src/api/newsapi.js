import { NEWS_API_KEY } from '../config';


// const BASE_API =`http://newsapi.org/v2`;
// const getPosts = (type = 'everything', params) => {
//     const searchParams = new URLSearchParams({ apiKey: API_KEY, ...params })
//     return fetch (`${BASE}/${type}?${searchParams.toString()}`)
// }

export const getPostsFetch = (param) => fetch(`https://newsapi.org/v2/everything?q=${param}&language
=en&sortBy=publishedAt&page=1&apiKey=${NEWS_API_KEY}`);