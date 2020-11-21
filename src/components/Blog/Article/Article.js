import React from 'react';
import { GoCalendar } from 'react-icons/go';
import './Article.css';

function Article( { article__imageSrc, article__clickHref, article__title, article__description, article__sourceNameHref, article__sourceName, article__publishedAt  } ) {
    return (
        <>
       
        <div className="article">

            <div className="article__img-part">
                <img className="article__image" src={article__imageSrc} /> 
            </div>

            <div className="article__text-part">
                <a href={article__clickHref} className="article__click" target='blank'>
                    <h1 className="article__title">{article__title}</h1>
                    <div className="article__description">{article__description}</div>
                </a>

                <div className="article__row-line"></div>

                <div className="article__footer-row"> 
                    <a className="article__source-name" href={article__sourceNameHref} target='blank'>{article__sourceName}</a>
                    <div className="article__footer-row">
                    <GoCalendar className="article__calendar-icon"/>
                    <div className="article__publishedAt">{article__publishedAt}</div>
                    </div>
                </div>
            </div> 

        </div>

        </>
    )
}
export default Article;