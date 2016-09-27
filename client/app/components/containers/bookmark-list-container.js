import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookmarksApi from '../../api/bookmarks-api';

class BookmarkListContainer extends Component {
  componentDidMount() {
    bookmarksApi.getBookmarks();
  }
  render() {
    return(
      <div className="bookmarks">
        <h2>Bookmark List Container here</h2>
        <pre>{ JSON.stringify(this.props.bookmarks, null, 2) }</pre>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    bookmarks: store.bookmarkState.items
  }
}
export default connect(mapStateToProps)(BookmarkListContainer);