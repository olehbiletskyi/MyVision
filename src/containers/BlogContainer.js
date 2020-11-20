import React from 'react';
import { connect } from 'react-redux';
import { getSomething } from '../actions/blog';
import Blog from '../components/Blog/Blog';


const BlogContainer = ( {author, publishedAt, articles, getSomething,} ) => (
    <Blog 
        author={author}
        publishedAt={publishedAt}
        articles={articles}
    />
);


const mapStateToProps = (state) => ({
    author: state.blogReducer.articles[0].author,
    publishedAt: state.blogReducer.articles[0].publishedAt,
    articles: state.blogReducer.articles,
});


const mapDispatchToProps =  {
        getSomething,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BlogContainer);