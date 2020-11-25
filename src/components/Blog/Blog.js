import React from 'react';
import { GoCalendar } from 'react-icons/go';
import {GoSearch} from "react-icons/go"
import Loader from 'react-loader-spinner'
import './Blog.css';
// import './Article/Article.js';


function Blog( {  articles, getPosts, value, changeInput, isLoading, totalResults } ) {

    return (
        <div className="Blog-wrapper">

            <form className="Blog-form" onSubmit={(e)=> (e.preventDefault()) } noValidate>
                <h1 className="Blog-form__title">Search news for a topic</h1>
                <div className="Blog-form__input-wrapper">
                    <GoSearch className='Blog-form__icon' />
                    <input
                        className='Blog-form__input'
                        name='Blog-form__input'
                        type='text'
                        placeholder="Search"
                        value={value}
                        onChange={ (e) => changeInput(e.target.value) }
                        autoComplete='off'
                    />
                    <button onClick={ (e)=>{return (e.preventDefault(), getPosts(value)) }} className="Blog__getPosts-btn" type='submit' disabled={(value === "")?true:false}>Search news</button>
                </div>
            </form>

            {(!isLoading && articles)? <div className="Blog-result-quality">Found {totalResults} articles</div> : null}

            {
                ( articles ) ? 
                    (<div className="Blog">
                        {articles.map((item) => (
                            <div className="article">
                                <div className="article__img-part">
                                    <img className="article__image" src={item.urlToImage}  alt="" /> 
                                </div>
                                <div className="article__text-part">
                                    <a href={item.url} className="article__click" target='blank'>
                                        <h1 className="article__title">{item.title.slice(0,43)} ...</h1>
                                        <div className="article__description">{item.description ? item.description.slice(0, 120) : 'Short description about new'} ...</div>
                                    </a>
                                    <div className="article__row-line"></div>

                                    <div className="article__footer-row"> 
                                        <a className="article__source-name" href={item.url} target='blank'>{item.source.name.slice(0, 15)}</a>
                                        <div className="article__footer-row">
                                        <GoCalendar className="article__calendar-icon"/>
                                        <div className="article__publishedAt">{item.publishedAt.slice(0,10)}, {item.publishedAt.slice(11,19)}</div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        ))} 
                        
                    </div>) : ( isLoading ? 

                                <Loader type="ThreeDots" color="#767676" height={140} width={140}  className="article-loader"/>
                                
                                : 

                                <div className="effects"> 
                                    <div className="curcle curcle1"></div>
                                    <div className="curcle curcle2"></div>
                                    <div className="curcle curcle3"></div>
                                </div>)
            }
            {( articles && totalResults>20) ? <div className="Blog-update-plan">For view more articles please upgrade to a paid plan...</div> : null}
            
                                
        </div>
        
    )
}
export default Blog;