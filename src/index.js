import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer,);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
