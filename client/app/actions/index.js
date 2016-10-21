import * as wpApi from '../api/wpApi'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_LATEST_POSTS = 'RECEIVE_LATEST_POSTS';
export const RECEIVE_LOAD_MORE_POSTS = 'RECEIVE_LOAD_MORE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';
export const RECEIVE_POSTS_ERROR = 'RECEIVE_POSTS_ERROR';

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receiveLatestPosts = (posts) => ({
    type: RECEIVE_LATEST_POSTS,
    posts
})

export const receiveLoadMorePosts = (posts) => ({
    type: RECEIVE_LOAD_MORE_POSTS,
    posts
})

export const receiveSinglePost = (post) => ({
    type: RECEIVE_SINGLE_POST,
    post
})

export const receivePostsError = (error) => ({
    type: RECEIVE_POSTS_ERROR,
    post
})

// Async Actions

export const getLatestPosts = () => (dispatch, getState) => {
    dispatch(requestPosts());
    return wpApi.get('posts')
        .then(json => dispatch(receiveLatestPosts(json)))
}

