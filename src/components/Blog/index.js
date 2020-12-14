import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { GoSearch } from "react-icons/go";
import { BsInfoSquare,  BsPencil } from 'react-icons/bs'; 
import { GiEarthAfricaEurope } from 'react-icons/gi'; 
import './index.css';
import Article from './Article';


function Blog( {  articles, getPosts, value, changeInput, isLoading, totalResults } ) {

    return (
        <div className="Blog-wrapper">


            {/* Menu burger */}
            <div class="burger"> 
                <NavLink to="/MyVision/about" className="nav-item">
                        <BsInfoSquare className="Navbar__icon-bc"/>
                </NavLink>
                <NavLink to="/MyVision/blog" className="nav-item">
                        <GiEarthAfricaEurope className="Navbar__icon"/>
                </NavLink>
                <NavLink to="/MyVision/contacts" className="nav-item">
                        <BsPencil className="Navbar__icon"/>
                </NavLink>
            </div>


            {/* Search panel*/}
            <form className="Blog-form" onSubmit={ (e)=> (e.preventDefault()) } noValidate>
                <h1 className="Blog-form__title">Search news for a topic</h1>
                <div className="Blog-form__input-wrapper">
                    <GoSearch className='Blog-form__icon' />
                    <input
                        className='Blog-form__input'
                        name='Blog-form__input'
                        type='text'
                        placeholder="Type some keyword"
                        value={value}
                        onChange={ (e) => changeInput(e.target.value) }
                        autoComplete='off'
                    />
                    <button onClick={ (e)=>{return (e.preventDefault(), getPosts(value)) }} className="Blog__getPosts-btn" type='submit' disabled={(value === "")?true:false}>Search news</button>
                </div>
            </form>


            {/*Searching results (number of articles which  were found) */}
            {(!isLoading && articles) ? <div className="Blog-result-quality">Found {totalResults} articles.</div> : null}


            {/*Articles */}
            {
                ( articles ) ? 

                    (<div className="Blog">
                        {articles.map((item) => (
                            <Article 
                                article__imageSrc = {item.urlToImage} 
                                article__clickHref = {item.url}
                                article__title = { item.title.slice(0,43) }
                                article__description = {item.description ? item.description.slice(0, 120) : 'Short description about new'}
                                article__sourceNameHref = {item.url}
                                article__sourceName = {item.source.name.slice(0, 15)}
                                article__publishedAt = {item.publishedAt.slice(0,10), item.publishedAt.slice(11,19)}
                            />  
                        ))} 
                        


                    </div>) : ( isLoading ? 

                                <Loader type="ThreeDots" color="#767676" height={140} width={140}  className="article-loader"/>
                                
                                : 

                                <div className="effects"> 
                                    <div className="curcle curcle1"></div>
                                    <div className="curcle curcle2"></div>
                                    <div className="curcle curcle3"></div>
                                </div>
                                
                                )
            }
            
            {/* Upgrade plan - message */}
            {( articles && totalResults>20) ? <div className="Blog-update-plan">For view more articles please upgrade to a paid plan... <a href="https://newsapi.org/pricing" target='blank'>Click here!</a> </div> : null}
            
                                
        </div>
        
    )
}
export default Blog;