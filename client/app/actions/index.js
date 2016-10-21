import * as wpApi from '../api/wpApi'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_NEW_POSTS = 'RECEIVE_NEW_POSTS';
export const RECEIVE_ADDITIONAL_POSTS = 'RECEIVE_ADDITIONAL_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receiveNewPosts = (posts) => ({
    type: RECEIVE_NEW_POSTS,
    posts
})

export const receiveAdditionalPosts = (posts) => ({
    type: RECEIVE_ADDITIONAL_POSTS,
    posts
})

export const setCurrentPost = (currentPost) => ({
    type: SET_CURRENT_POST,
    currentPost // slug
})

// Async Actions

export const getSinglePostIfNecessary = params => (dispatch, getState) => {
    console.log(getState.posts);
    dispatch(requestPosts())
    return wpApi.get('posts', params)
        .then(json => dispatch(receivePosts(json)))
}

export const getAdditionalPosts = params => dispatch => {

}
