import { NEWS_API_KEY } from '../config';


fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));