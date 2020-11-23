import React from 'react';
import { GoCalendar } from 'react-icons/go';
import './Blog.css';
// import './Article/Article.js';


function Blog( {  articles, getPosts, value, } ) {
    

    return (
        <div className="Blog-wrapper">

            <form className="Blog-form" /*onSubmit={}*/ noValidate>
                <h1 className="Blog-form__title">Write search phrases:</h1>
                <div className="Blog-form__input-wrapper">
                    <input
                        className='Blog-form__input'
                        name='Blog-form__input'
                        type='text'
                        placeholder="Search"
                        value={value}
                        // onChange={}
                        autocomplete='off'
                    />
                </div>
            </form>
            <button onClick={getPosts} className="Blog__getPosts-btn" type='submit'>SEARCH</button>
            {
                ( articles ) ? 
                    (<div className="Blog">
                        {articles.map((item) => (
                            <div className="article">
                                <div className="article__img-part">
                                    <img className="article__image" src={item.urlToImage}/> 
                                </div>
                                <div className="article__text-part">
                                    <a href={item.url} className="article__click" target='blank'>
                                        <h1 className="article__title">{item.title.slice(0,50)} ...</h1>
                                        <div className="article__description">{item.description ? item.description.slice(0, 150) : 'Short description about new'} ...</div>
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
                    </div>) :  <div>"Поки що нічого немає"</div>
            }
            
        </div>
        
    )
}
export default Blog;