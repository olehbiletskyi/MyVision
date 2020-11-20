import React from 'react';
import './Blog.css';
import { GoCalendar } from 'react-icons/go';

function Blog(props) {
    return (
        <div className="Blog">
            {props.articles.map((item) => (
                <div className="article">
                    <div className="article__img-part">
                        <img className="article__image" src={item.urlToImage} /> 
                    </div>
                    <div className="article__text-part">
                        <a href={item.url} className="article__click" target='blank'>
                            <h1 className="article__title">{item.title.slice(0,50)} ...</h1>
                            <div className="article__description">{item.description.slice(0, 150)} ...</div>
                        </a>
                        <div className="article__row-line"></div>

                        <div className="article__footer-row"> 
                            <a className="article__source-name" href={item.url} target='blank'>{item.source.name}</a>
                            <div className="article__footer-row">
                            <GoCalendar className="article__calendar-icon"/>
                            <div className="article__publishedAt">{item.publishedAt.slice(0,10)}, {item.publishedAt.slice(11,19)}</div>
                            </div>
                        </div>
                    </div>    
                </div>
            ))}
                 

        </div>
    )
}
export default Blog;