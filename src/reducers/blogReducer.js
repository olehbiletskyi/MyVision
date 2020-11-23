import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from '../constants/constants';

const initialState = {
    artcl: {
        isLoading: null,
        error: null,
        data: {
            "status": null,
            "totalResults": null,
            "articles": null,
        }
    },
};
//ЗРАЗОК ВИТЯГНУТИХ ДАНИХ:
// const initialState = {
//     "status": "ok",
//     "totalResults": 1449,
//     "articles": [
//         {
//             "source": {
//             "id": "cnn",
//             "name": "CNN"
//             },
//             "author": "Jamie Gumbrecht, CNN",
//             "title": "Pfizer and BioNTech to submit to FDA today for emergency authorization for their coronavirus vaccine - CNN",
//             "description": "Pfizer and BioNTech said they will submit to the US Food and Drug Administration today for an emergency use authorization for their coronavirus vaccine candidate.",
//             "url": "https://www.cnn.com/2020/11/20/health/pfizer-vaccine-eua-submission/index.html",
//             "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201119175637-03-pfizer-vaccine-vials-super-tease.jpg",
//             "publishedAt": "2020-11-20T12:50:00Z",
//             "content": "(CNN)Pfizer and BioNTech said they will submit to the US Food and Drug Administration today for an emergency use authorization for their coronavirus vaccine candidate.\r\nThis is the first coronavirus … [+4489 chars]"
//         },
//
//     ]    
// };

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                artcl: {
                    isLoading: true,
                    error: null,
                    data: {
                        "status": null,
                        "totalResults": null,
                        "articles": null,
                    }
                },
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                artcl: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                },
            };
        case GET_POSTS_FAIL:
            return {
                ...state,
                artcl: {
                    isLoading: false,
                    error: action.payload,
                    data: false,
                },
            };
        default:
            return state;
    }
};
export default blogReducer;