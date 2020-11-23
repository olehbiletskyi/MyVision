import React from 'react';
import { connect } from 'react-redux';
import { getPostsFunc } from '../actions/blog';
import Blog from '../components/Blog/Blog';

const BlogContainer = ( { articles, getPosts, value, } ) => (
    <Blog 
        articles={articles} 
        getPosts={getPosts}
        value={value}
    />
);


const mapStateToProps = (state) => ({
    articles: state.blogReducer.artcl.data.articles,
    value: state.blogReducer.value,
});


const mapDispatchToProps = (dispatch, param) => {
    return{
        getPosts: getPostsFunc(dispatch, param),
    };
};


export default connect(mapStateToProps,
mapDispatchToProps,)(BlogContainer);