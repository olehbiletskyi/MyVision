import React from 'react';
import './Blog.css';

function Blog(props) {
    console.log(props);
    return (
        <div className="Blog">
            {props.articles.map((item) => (
                <div className="standart-article">
                    <div className="img-part">
                        <img className="article-urlToImage" src={item.urlToImage} /> 
                    </div>
                    <div className="text-part">
                        <h1 className="article-title">{item.title}</h1>

                        <div className="article-description">{item.description}</div>

                        <div className="article-source-name"> 
                        <a href={item.url} target='blank'>{item.source.name}</a>
                        </div>
                        <div className="article-publishedAt">{item.publishedAt}</div>


                        {/* <div className="article-author">{item.author}</div> */}
                    </div>
                            
                </div>
            ))}
                 

        </div>
    )
}
export default Blog;