// import {


// } from '../constants/constants';

const initialState = {
    center: {
        lat: 48.920827,
        lng: 24.705657,
        zoom: 15,
    },
    BiggestCompanies: [
        {
            name: "ItCluster",
            lat: 48.91942848361722,
            lng: 24.709772442607548,
        },
        {
            name: "SoftServe",
            lat: 48.91444600299144,
            lng: 24.711310786787596,
        },
        {
            name: "Coax",
            lat: 48.91653725017094,
            lng: 24.70209075480279,
        },
        {
            name: "Perfectial",
            lat: 48.922155173444004,
            lng: 24.699701455905004,
        },
        {
            name: "Softjourn",
            lat: 48.925506509980494,
            lng: 24.70576648493562,
        },
        {
            name: "Promprylad",
            lat: 48.91410863349344,
            lng: 24.712133780117387,
        },
        {
            name: "Elex",
            lat: 48.929817047487084,
            lng: 24.707427284741318,
        },
    ],
     

};


const mapReducer = (state = initialState,) => {
            return state;
}
export default mapReducer;