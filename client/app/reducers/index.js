import { combineReducers } from 'redux';

// Reducers
import bookmarkReducer from './bookmarks-reducer';

// Combine Reducers
var reducers = combineReducers({
  bookmarkState: bookmarkReducer
});

export default reducers;
