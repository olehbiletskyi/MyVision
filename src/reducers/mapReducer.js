import { BIGGEST_COMPANIES_SHOW_SWITCH_BUTTON } from '../constants/constants';

const initialState = {
    center: {
        lat: 48.92599888028613,
        lng: 24.703786467898833,
        zoom: 14,
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
        {
            name: "Sombra",
            lat: 48.91372868397792, 
            lng: 24.718179369317156,
            description:"We focus on a small amount of technologies and have an extremely thorough process of hiring. Our employees are motivated, productive and highly capable. Our services include drafting and analyzing new requirements, technical consulting, and implementing software solutions",
            address:"Zoriya St, 7А, Ivano-Frankivs'k, Ivano-Frankivs'ka oblast, 76000",
            telephone:"+380972750055",
            website:"sombrainc.com",
        },
        {
            name: "Intellias",
            lat: 48.915568996579196,
            lng:  24.718820173509407,
            description:" Intellias — одна з найбільших українських ІТ компаній, яка об'єднує понад 1500 професіоналів. Наші розробницькі центри розташовані у Львові, Києві, Одесі, Харкові, Івано-Франківську та Кракові, а також є представництва у Берліні, Чикаго, Нью-Йорку та Ер-Ріяді. Технологічними продуктами, які розробляють наші інженери, користуються понад 2 млрд. людей.",
            address:"Україна, Івано-Франківськ вул. Степана Бандери, 21",
            telephone:"+380322904850",
            website:"intellias.ua",
        },
        {
            name: "Devlight",
            lat: 48.934265697264046, 
            lng: 24.716530953908403,
            description:"Devlight is a service company that develops various digital products for businesses. Our team comprises more than 50 people united under the idea of being inspired by innovation and technological challenge. While working on widening the clients' development horizons, employees of Devlight have no choice but to find remarkable ways to personal growth, professional progress and increasing rates of life satisfaction.",
            address:"Ukraine, Ivano-Frankivsk, Nadrichna, 4B",
            telephone:"+380500344250",
            website:"devlight.io",
        },
        {
            name: "Netfully",
            lat: 48.919224719244475, 
            lng: 24.719265592609958,
            description:"Netfully is an agile software development company that provides companies like yours with the development resources you need to grow your business. This allows you to save on employee costs and avail of the very best development talent around. We provide custom software development, product development, quality assurance, mobile development, UX design, maintenance and support and many other services.",
            address:"Nezalezhnosti St, 87, Ivano-Frankivs’k, Ivano-Frankivs’ka oblast, 76000",
            telephone:"",
            website:"netfully.com",
        },
        {
            name: "ELEKS",
            lat: 48.929778777948144,
            lng:  24.707162224271446,
            description:"ELEKS is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.",
            address:"2A Pivnichnyi Boulevard, Ivano-Frankivsk 76019, Ukraine",
            telephone:"+380689753676",
            website:"eleks.com",
        },
        {
            name: "Vakoms",
            lat: 48.92274882225337, 
            lng: 24.71498236404341,
            description:"One Stop Software Company for Startups, SMEs & Industry Giants  Build your product, refine the business with Vakoms, your reliable IT partner",
            address:"22A Hrushevskoho Street, Ivano-Frankivsk, Ukraine, 76000",
            telephone:"",
            website:"vakoms.com",
        },
        {
            name: "spdev",
            lat: 48.93217885254002, 
            lng: 24.711593764412438,
            description:"We develop applications, websites, CRM systems,  also we take part in developing startups.",
            address:"вулиця Крайківського, 1-Б Івано-Франківськ Івано-Франківська область 76000",
            telephone:"",
            website:"spdev.com.ua",
        },
        {
            name: "Apiko ",
            lat: 48.915419424506254,
            lng:  24.719987799937112,
            description:"Apiko (former JSSolutions) is a marketplace development company that provides custom services for B2B and B2C industries. From the idea to its implementation — our team takes a full responsibility of your product. The main technologies we are armed with: Meteor.js, Node.js, and Express.js, React.js, React Native.",
            address:"Teodora Tsoklera St, 9a, 76000 Ivano-Frankivsk, Ukraine",
            telephone:"+380689668400",
            website:"apiko.com",
        },
        {
            name: "Webmil",
            lat: 48.9165755645268,
            lng:  24.711123069317132,
            description:"Webmil is a web production specializing in the full cycle of web solutions development. Our sphere of expertise: consulting and business analysis, web and mobile development, UX design, creation of visual identity.",
            address:"вулиця Євгена Коновальця, 35, Івано-Франківськ, Івано-Франківська область, 76000",
            telephone:"+380960236363",
            website:"webmil.eu",
        },
        {
            name: "OSF Digital",
            lat: 48.917676233723626, 
            lng: 24.700615013493927,
            description:"Even in today's challenging economy, OSF has grown at exponential speed. Since our founding in 2003, the company has doubled operations each year, resulting in continuous innovation and new services for our clients.",
            address:"Івано-Франківськ Вул. Мазепи, 72",
            telephone:"+380504344347",
            website:"osf.digital",
        },
        {
            name: "Ukietech",
            lat: 48.92182803512985, 
            lng: 24.714429219314063,
            description:"At Ukietech, we work for your success. If you have an idea for a startup, we know how to make it happen. For the existing business, we can automate both core and non-core operations to reduce costs, raise efficiency and make your employees happy. Bringing the intuitive and simple user experience to complex software solutions is our unique key to both our and customers success",
            address:"22A Hrushevsky St., Ivano-Frankivsk, 76018, Ukraine",
            telephone:"+380342724519",
            website:"ukietech.com",
        },
        {
            name: "Avenga",
            lat: 48.91382390313666, 
            lng: 24.71495441534143,
            description:"We are a global IT and digital transformation champion that supports our customers in realizing technology’s huge potential for a smarter and more sustainable world.  We’ve united creativity and innovation with the instant impact and execution power of a large IT solution provider.  Customer experience is the new battleground and Avenga is your partner to master the challenge.",
            address:"вул. Сахарова, 34/4 пов",
            telephone:"+380322777782",
            website:"avenga.com",
        },
        {
            name: "LETZGRO",
            lat: 48.92254607102832, 
            lng: 24.712895384658566,
            description:"Letzgro is a technology shop for your #cloud, #mobile, #RPA robotic process automation, and digital #marketing initatives",
            address:"Ivano-Frankivsk, Mel'nychuka St, 16/b",
            telephone:"+16505573444",
            website:"letzgro.net",
        } 
    ],
    BiggestCompaniesShow: false,




};


const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case BIGGEST_COMPANIES_SHOW_SWITCH_BUTTON:
            return {
                ...state,
                BiggestCompaniesShow: !state.BiggestCompaniesShow,
            };
        default:
            return state;
    };
};
export default mapReducer;