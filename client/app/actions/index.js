import * as wpApi from '../api/wpApi'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_LATEST_POSTS = 'RECEIVE_LATEST_POSTS';
export const RECEIVE_MORE_POSTS = 'RECEIVE_MORE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';
export const RECEIVE_POSTS_ERROR = 'RECEIVE_POSTS_ERROR';

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receiveLatestPosts = (posts) => ({
    type: RECEIVE_LATEST_POSTS,
    posts
})

export const receiveMorePosts = (posts) => ({
    type: RECEIVE_MORE_POSTS,
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

export const getLatestPosts = (page) => (dispatch) => {
    dispatch(requestPosts());
    return wpApi.get('posts', { page: page })
        .then(json => dispatch(receiveLatestPosts(json)))
}

export const getSinglePost = (slug) => (dispatch) => {
    dispatch(requestPosts());
    return wpApi.get('posts', { slug: slug })
        .then(json => dispatch(receiveSinglePost(json)))
}

export const getMorePosts = () => (dispatch, getState) => {
    dispatch(requestPosts());
    return wpApi.get('posts', { page: getState.nextPage })
        .then(json => dispatch(receiveMorePosts(json)))
}


