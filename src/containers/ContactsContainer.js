import React from 'react';
import { connect } from 'react-redux';
import Contacts from '../components/Contacts/Contacts';
import {showBiggestCompaniesFunc} from "../actions/maps";


const ContactsContainer = ( {BiggestCompanies, center,BiggestCompaniesShow, showBiggestCompaniesFunc,} ) => (
    <Contacts 
        BiggestCompanies={BiggestCompanies}
        center={center}
        BiggestCompaniesShow={BiggestCompaniesShow}
        showBiggestCompaniesFunc={showBiggestCompaniesFunc}
    />
);



const mapStateToProps = (state) => ({
    BiggestCompanies: state.mapReducer.BiggestCompanies,
    center: state.mapReducer.center,
    BiggestCompaniesShow: state.mapReducer.BiggestCompaniesShow,

});
const mapDispatchToProps = (dispatch) => {
    return{
        showBiggestCompaniesFunc: () => dispatch( showBiggestCompaniesFunc() ),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ContactsContainer);