import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_MORE_POSTS_REQUEST,
    GET_MORE_POSTS_SUCCESS,
    GET_MORE_POSTS_FAIL,
} from '../constants/constants';

import { getPostsTechnologyFetch, getPostsFetch } from '../api/newsapi';

const getPosts = async (dispatch) => {

    dispatch({ type: GET_POSTS_REQUEST });
  
    try {
      const response = await getPostsTechnologyFetch();
      const res = await response.json();
      dispatch({ type: GET_POSTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_POSTS_FAIL, payload: e });
    }

  };
  
  export const getPostsFunc = (dispatch) => {
    return () => getPosts(dispatch);
  };