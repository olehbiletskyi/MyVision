import { NEWS_API_KEY } from '../config';

let topic = 'Frontend';
let url1 = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_API_KEY}`;//топ-новини, США, категорія "технології"
let url2 = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`;//топ-новини, категорія "технології"
let url3 = `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;//все, про Реакт
export const getPostsTechnologyFetch = () => fetch(url3);




// const BASE_API =`http://newsapi.org/v2`;
// const getPosts = (type = 'everything', params) => {
//     const searchParams = new URLSearchParams({ apiKey: API_KEY, ...params })
//     return fetch (`${BASE}/${type}?${searchParams.toString()}`)
// }

export const getPostsFetch = (param) => fetch(`https://newsapi.org/v2/everything?q=${param}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);