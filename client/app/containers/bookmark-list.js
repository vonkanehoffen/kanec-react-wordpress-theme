import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookmarks } from '../actions/bookmark-actions'
import Bookmark from '../components/bookmark.js'
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
          bookmarks.map( (item, key) => {
            return <Bookmark
              key={key}
              title={item.title}
              url={item.url}
              />
            })
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