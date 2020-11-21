import { NEWS_API_KEY } from '../config';

// export const getPostsTechnologyFetch = () => fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`);//топ-новини категорії "технології"




export const getPostsTechnologyFetch = () => fetch(`http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a97d9ff63a9b4a2280fa77322ef09f6f`)

