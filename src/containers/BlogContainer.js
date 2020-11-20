import React from 'react';
import { connect } from 'react-redux';
import { getSomething } from '../actions/blog';
import Blog from '../components/Blog/Blog';


const BlogContainer = ( {getSomething,} ) => {
    <Blog />
};


const mapStateToProps = () => {
    
}


const mapDispatchToProps = () => {
    return{
        getSomething,
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BlogContainer);