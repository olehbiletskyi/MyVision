import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose  } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App'; 
import rootReducer from './reducers';


// LOGGER
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}


//REDUX-DEV-TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//CREATE STORE
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
