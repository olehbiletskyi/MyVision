import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_MORE_POSTS_REQUEST,
    GET_MORE_POSTS_SUCCESS,
    GET_MORE_POSTS_FAIL,

    CHANGE_INPUT_BLOG,
} from '../constants/constants';

import { getPostsFetch } from '../api/newsapi';

const getPosts = async (dispatch, param) => {
    dispatch({ type: GET_POSTS_REQUEST });
    try {
      const response = await getPostsFetch(param);
      const res = await response.json();
      dispatch({ type: GET_POSTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_POSTS_FAIL, payload: e });
    }
};
  
export const getPostsFunc = (dispatch) => {
    return (param) => getPosts(dispatch, param);
};


export const changeInputAction = (inputValue) => (
    {type: CHANGE_INPUT_BLOG, payload: inputValue,}
);