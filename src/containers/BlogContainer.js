import React from 'react';
import { connect } from 'react-redux';
import { getPostsFunc } from '../actions/blog';
import Blog from '../components/Blog/Blog';

const BlogContainer = ( {articles, getPosts,} ) => (
    <Blog 
        articles={articles} getPosts={getPosts}
    />
);


const mapStateToProps = (state) => ({
    articles: state.blogReducer.artcl.data.articles,
});


const mapDispatchToProps = (dispatch) => {
    return{
        getPosts: getPostsFunc(dispatch),
    };
};


export default connect(mapStateToProps,
mapDispatchToProps,)(BlogContainer);