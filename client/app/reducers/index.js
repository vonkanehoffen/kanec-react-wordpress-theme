import { combineReducers } from 'redux'

import {
    REQUEST_POSTS,
    RECEIVE_NEW_POSTS,
    RECEIVE_ADDITIONAL_POSTS,
    SET_CURRENT_POST
} from '../actions'

const postsReducer = ( state = {
    isFetching: false,
    currentPost: false,
    posts: []
}, action ) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_NEW_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.posts
            }
        case RECEIVE_ADDITIONAL_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: [...state.posts, ...action.posts]
            })
        case SET_CURRENT_POST:
            return Object.assign({}, state, {
                currentPost: action.currentPost
            })
        default:
            return state
    }
}

// export default combineReducers({
//     postsReducer
// })

export default postsReducer
