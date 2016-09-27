import * as types from '../actions/action-types';

const bookmarkReducer = function( state = {
  items: []
}, action ) {
  switch(action.type) {
    case types.GET_BOOKMARKS_SUCCESS:
      return Object.assign({}, state, { items: action.bookmarks });
  }
  return state;
}

export default bookmarkReducer;
