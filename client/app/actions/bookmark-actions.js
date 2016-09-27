import fetch from 'isomorphic-fetch';
import * as types from './action-types';

function receiveBookmarks(bookmarks) {
  return {
    type: types.GET_BOOKMARKS_SUCCESS,
    bookmarks: bookmarks
  }
}

export function fetchBookmarks() {
  return function (dispatch) {
    return fetch('http://localhost:3002/bookmarks')
      .then(response => response.json())
      .then(json => dispatch(receiveBookmarks(json)));
  }
}
