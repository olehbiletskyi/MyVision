import React from 'react';
import { connect } from 'react-redux';
import { getPostsFunc, changeInputAction } from '../actions/blog';
import Blog from '../components/Blog';

const BlogContainer = ( { articles, getPosts, value, changeInput, isLoading, totalResults, } ) => (
    <Blog 
        articles={articles} 
        getPosts={getPosts}
        value={value}
        changeInput={changeInput}
        isLoading={isLoading}
        totalResults={totalResults}
    />
);


const mapStateToProps = (state) => ({
    articles: state.blogReducer.posts.data.articles,
    value: state.blogReducer.value,
    isLoading: state.blogReducer.posts.isLoading,
    totalResults: state.blogReducer.posts.data.totalResults,
});


const mapDispatchToProps = (dispatch, param) => {
    return{
        getPosts: getPostsFunc(dispatch, param),
        changeInput: (inputValue) => dispatch( changeInputAction( inputValue ) ) 
    };
};


export default connect(mapStateToProps,
mapDispatchToProps,)(BlogContainer);