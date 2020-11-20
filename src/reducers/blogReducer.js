import {
    GET_SOMETHING,
} from "../constants/constants";

const initialState = {
    "status": "ok",
    "totalResults": 1449,
    "articles": [
        {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Jamie Gumbrecht, CNN",
            "title": "Pfizer and BioNTech to submit to FDA today for emergency authorization for their coronavirus vaccine - CNN",
            "description": "Pfizer and BioNTech said they will submit to the US Food and Drug Administration today for an emergency use authorization for their coronavirus vaccine candidate.",
            "url": "https://www.cnn.com/2020/11/20/health/pfizer-vaccine-eua-submission/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201119175637-03-pfizer-vaccine-vials-super-tease.jpg",
            "publishedAt": "2020-11-20T12:50:00Z",
            "content": "(CNN)Pfizer and BioNTech said they will submit to the US Food and Drug Administration today for an emergency use authorization for their coronavirus vaccine candidate.\r\nThis is the first coronavirus … [+4489 chars]"
        },
        {
            "source": {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "Nathan Ingraham",
            "title": "M1-powered Macs can run Windows apps, with some help from CrossOver",
            "description": "Apple’s new M1-powered Macs appear to meet the company’s audacious speed claims, but there are still some drawbacks compared to Intel Macs. One thing that’s getting lost in the transition to M1 is Boot Camp, a tool that allowed you to install and run Windows …",
            "url": "https://www.engadget.com/apple-m1-silicon-mac-windows-crossover-apps-145416728.html",
            "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-11%2F01a2b500-2a76-11eb-b7ff-6787f29d1d99&client=amp-blogside-v2&signature=8fb61847ef927281eda9c60b18a217e86ce13b3b",
            "publishedAt": "2020-11-19T14:54:16Z",
            "content": "As Jeremy White from the CrossOver team writes, “I can't tell you how cool that is; there is so much emulation going on under the covers. Imagine - a 32-bit Windows Intel binary, running in a 32-to-6… [+971 chars]"
        },
        {
            "source": {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "",
            "title": "Tesla Model 3 crash sends scorching battery cells into a nearby house - Engadget",
            "description": "A Tesla Model 3 owner crashed his car so hard, the electric vehicle’s battery broke apart and sent cells flying all over the area.  The police department of Corvallis, Oregon has posted the details of the crash on Facebook, where it revealed that the owner wa…",
            "url": "https://www.engadget.com/tesla-model-3-crash-battery-fire-090759530.html",
            "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-11%2F9cb22930-2b03-11eb-bcc7-84a8fccb81ad&client=amp-blogside-v2&signature=7586f6350636bc8468d2359171ac97f38ebccf3a",
            "publishedAt": "2020-11-20T09:24:38Z",
            "content": "A Tesla Model 3 owner crashed his car so hard, the electric vehicle’s battery broke apart and sent cells flying all over the area. The police department of Corvallis, Oregon has posted the details of… [+866 chars]"
        },
        {
            "source": {
            "id": "mashable",
            "name": "Mashable"
            },
            "author": "Haley Henschel",
            "title": "This year's best Black Friday tablet deals include $200 off the brand new iPads",
            "description": "Here are the best Black Friday deals on tablets as of Nov. 19: BEST IPAD DEAL: iPad (WiFi + Cellular, 32GB or 128GB) — save $200 at Best Buy with a 2-year Verizon contract BEST FOR KIDS: Amazon Fire HD 10 Kids Edition (32GB) — get $40 in K…",
            "url": "https://mashable.com/shopping/black-friday-tablet-deals/",
            "urlToImage": "https://mondrian.mashable.com/2020%252F11%252F19%252F9c%252F36459624042c47c2b3743f540c3fea7c.da8a6.png%252F1200x630.png?signature=ykQV_U1isVSwfD7xnLBCW-GcMSA=",
            "publishedAt": "2020-11-19T10:04:00Z",
            "content": "Here are the best Black Friday deals on tablets as of Nov. 19:\r\nAnd here we were, thinking that Prime Day brought us a glut of good tablet sales.\r\nThis Black Friday, we're seeing what feels like a re… [+7330 chars]"
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