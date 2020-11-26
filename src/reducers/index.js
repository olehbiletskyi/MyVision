import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import mapReducer from './mapReducer';



export default combineReducers({
    blogReducer:blogReducer,
    mapReducer:mapReducer,

})