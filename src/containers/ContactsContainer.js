import React from 'react';
import { connect } from 'react-redux';
// import { getPostsFunc, changeInputAction } from '../actions/blog';
import Contacts from '../components/Contacts/Contacts';


const ContactsContainer = ( {BiggestCompanies, center,} ) => (
    <Contacts 
        BiggestCompanies={BiggestCompanies}
        center={center}
    />
);



const mapStateToProps = (state) => ({
    BiggestCompanies: state.mapReducer.BiggestCompanies,
    center: state.mapReducer.center,
});


export default connect(mapStateToProps)(ContactsContainer);