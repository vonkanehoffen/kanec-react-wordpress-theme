import * as types from '../actions/action-types';

const bookmarkReducer = function( state = {
  isFetching: false,
  items: []
}, action ) {
  switch(action.type) {

    case types.REQUEST_BOOKMARKS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case types.RECEIVE_BOOKMARKS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.bookmarks
      });

  }
  return state;
};

export default bookmarkReducer;
