import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookmarks } from '../actions/bookmark-actions'
import Bookmarks from '../components/bookmarks.js'
import CircularProgress from 'material-ui/CircularProgress';
import store from '../store'

class BookmarkListContainer extends Component {
  componentDidMount() {
    store.dispatch(fetchBookmarks());
  }
  render() {
    const { isFetching, bookmarks } = this.props;
    return(
      <div className="bookmarks">
        <h2>Bookmark List Container</h2>
        { isFetching ?
          <CircularProgress /> :
          <Bookmarks bookmarks={bookmarks} />
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isFetching: store.bookmarkState.isFetching,
    bookmarks: store.bookmarkState.items
  }
};

export default connect(mapStateToProps)(BookmarkListContainer);