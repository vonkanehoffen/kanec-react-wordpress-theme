import fetch from 'isomorphic-fetch';
import * as types from './action-types';

function requestBookmarks() {
  return {
    type: types.REQUEST_BOOKMARKS
  }
}
function receiveBookmarks(bookmarks) {
  return {
    type: types.RECEIVE_BOOKMARKS,
    bookmarks: bookmarks
  }
}

export function fetchBookmarks() {
  return function (dispatch) {
    dispatch(requestBookmarks());
    return fetch('http://localhost:3002/bookmarks')
      .then(response => response.json())
      .then(json => dispatch(receiveBookmarks(json)));
  }
}
