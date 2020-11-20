import {
    GET_SOMETHING,
} from "../constants/constants";

const initialState = {
    "status": "ok",
    "totalResults": 1449,
    "articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Louryn Strampe",
            "title": "15 Early Black Friday Deals You’ll Want to Snag Now",
            "description": "You don't have to wait until the day after Thanksgiving—or leave your house—to get in on these Black Friday deals from Best Buy, Amazon, Target, and more.",
            "url": "https://www.wired.com/story/early-black-friday-deals-2020/",
            "urlToImage": "https://media.wired.com/photos/5f0780f239276c2836968904/191:100/w_1280,c_limit/Gear-Dyson-Airwrap-Complete-set-SOURCE-Dyson.jpg",
            "publishedAt": "2020-11-19T12:00:00Z",
            "content": "It is technically a day, but \"Black Friday\" is now a marketing catch-all. Retailers use it to hype sales all year long. The actual Black Friday comes but once a year, though. It isn't just a one-day … [+2905 chars]"
        },
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Catie Keck",
            "title": "Apple Will Mercifully Share Its Peanuts Specials Streaming Rights with PBS",
            "description": "The holidays are saved, Charlie Brown! Well, kind of.Read more...",
            "url": "https://gizmodo.com/apple-will-mercifully-share-its-peanuts-specials-stream-1845710774",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/o3snsdpk6dedcz1guds8.png",
            "publishedAt": "2020-11-19T00:21:00Z",
            "content": "The holidays are saved, Charlie Brown! Well, kind of.\r\nApple recently snapped up exclusive streaming rights for the iconic Peanuts specials for Apple TV+including A Charlie Brown Christmas and A Char… [+1614 chars]"
        },
        {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Sara Sidner, CNN",
            "title": "This young ER doctor had to tell Covid-19 ",
            "description": "ER doctor David Burkard was 28, fit, healthy and knew how to take precautions against coronavirus.",
            "url": "https://www.cnn.com/2020/11/19/health/er-doctor-david-burkard-coronavirus/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201119182452-david-burkard-covid-super-tease.jpeg",
            "publishedAt": "2020-11-20T01:26:00Z",
            "content": "Grand Rapids, Michigan (CNN)When coronavirus first hit in March, Dr. David Burkard found himself having some of the toughest conversations of his life. \r\nHe had to let patients know when it was time … [+4462 chars]"
            },



    ]    
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SOMETHING:
            return {
                state
            };
        default:
            return state;
    }
}
export default blogReducer;