import * as wpApi from '../api/wpApi'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
})

export const setCurrentPost = (currentPost) => ({
    type: SET_CURRENT_POST,
    currentPost // slug
})

export const getPosts = params => dispatch => {
    dispatch(requestPosts())
    return wpApi.get('posts', params)
        .then(json => dispatch(receivePosts(json)))
}
