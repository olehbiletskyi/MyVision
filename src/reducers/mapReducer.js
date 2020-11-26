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
            name: "ITClusterAcademy",
            lat: 48.91942848361722,
            lng: 24.709772442607548,
            description:"Навчальна платформа, створена для тих, хто хоче здобути нові знання та бачить своє майбутнє в сфері інформаційних технологій.",
            address:"вул. Січових стрільців, 17, м. Івано-Франківськ, Івано-Франківська область, 76000",
            telephone:"+380636741219",
            website:"itca.if.ua",
        },
        {
            name: "SoftServe",
            lat: 48.91444600299144,
            lng: 24.711310786787596,
            description:"Українська ІТ компанія, що працює у сфері розробки програмного забезпечення та надання консультаційних послуг.",
            address:"вул. Сахарова, 23а, м. Івано-Франківськ, Івано-Франківська область, 76000",
            telephone:"+380342723580",
            website:"www.softserveinc.com",
        },
        {
            name: "Coax",
            lat: 48.91653725017094,
            lng: 24.70209075480279,
            description:"We are improving different human capabilities in our projects by integration of new technologies and internal tools.",
            address:"Mazepy 72/31, Ivano-Frankivsk, 76018 UA",
            telephone:"+380997466810",
            website:"coaxsoft.com",
        },
        {
            name: "Perfectial",
            lat: 48.922155173444004,
            lng: 24.699701455905004,
            description:"We are a software development company committed to helping businesses build and improve their software products",
            address:"20A Korolya Danila st., Ivano-Frankivsk 76010, Ukraine",
            telephone:"+380672304672",
            website:"perfectial.com",
        },
        {
            name: "SoftJourn",
            lat: 48.925506509980494,
            lng: 24.70576648493562,
            description:"We Are a Global Technology Services Provider",
            address:"Tychyny, 7 and Tychyny, 9 Ivano-Frankivsk, 76019",
            telephone:" +380956635883",
            website:"softjourn.com",
        },
        {
            name: "Promprylad",
            lat: 48.91410863349344,
            lng: 24.712133780117387,
            description:"Промприлад.Реновація — інноваційний центр на базі старого заводу, який працює на перетині чотирьох напрямків розвитку регіону: нової економіки та урбаністики, сучасного мистецтва та освіти.",
            address:"вул. Академіка Сахарова, 23, м. Івано-Франківськ, Івано-Франківська область, 76000",
            telephone:"+380682302302",
            website:"promprylad.ua",
        },
        {
            name: "[bvblogic]",
            lat: 48.9396044745161, 
            lng: 24.73968008471555,
            description:"[bvblogic] is a technology development company with a passion for innovation. We develop and implement efficient IT solutions in six key domains: Agriculture, Logistics, and Transportation, eCommerce, eTickets, Retail and FMCG, Marketing and Advertising.",
            address:"192 Vovchynetska street, Ivano-Frankivsk 76000, Ukraine",
            telephone:"+380635459487",
            website:"bvblogic.com",
        },
    ],



};


const mapReducer = (state = initialState,) => {
            return state;
}
export default mapReducer;