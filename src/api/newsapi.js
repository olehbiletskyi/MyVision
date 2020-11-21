import { NEWS_API_KEY } from '../config';

export const getPosts = () => fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`);//топ-новини категорії "технології"

