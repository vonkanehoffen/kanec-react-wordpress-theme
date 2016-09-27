import fetch from 'isomorphic-fetch';
import store from '../store';

export function getBookmarks() {
  return fetch('http://localhost:3002/bookmarks')
    .then(response => response.json())
    .then(json => store.dispatch({
      type: 'GET_BOOKMARKS_SUCCESS',
      bookmarks: json
    }));
}
