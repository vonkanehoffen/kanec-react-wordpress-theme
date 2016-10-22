import { combineReducers } from 'redux'

import {
    REQUEST_POSTS,
    RECEIVE_LATEST_POSTS,
    RECEIVE_MORE_POSTS,
    RECEIVE_SINGLE_POST,
    RECEIVE_POSTS_ERROR
} from '../actions'

const postsReducer = ( state = {
    isFetching: false,
    gotLatest: false,
    nextPage: 2,
    error: false,
    posts: []
}, action ) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_LATEST_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.posts,
                gotLatest: Date.now(),
                nextPage: state.nextPage++
            })
        case RECEIVE_MORE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: [...state.posts, ...action.posts],
                nextPage: state.nextPage++
            })
        case RECEIVE_SINGLE_POST:
            return Object.assign({}, state, {
                isFetching: false,
                posts: [...state.posts, ...action.post],
            })
        case RECEIVE_POSTS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state
    }
}

// export default combineReducers({
//     postsReducer
// })

export default postsReducer
