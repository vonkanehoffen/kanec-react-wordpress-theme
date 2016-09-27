import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookmarks } from '../actions/bookmark-actions'
import Bookmark from '../components/bookmark.js'
import store from '../store'

class BookmarkListContainer extends Component {
  componentDidMount() {
    store.dispatch(fetchBookmarks());
  }
  render() {
    return(
      <div className="bookmarks">
        <h2>Bookmark List Container</h2>
        <pre>{JSON.stringify(this.props.bookmarks, null, 2)}</pre>
        {this.props.bookmarks.map( (item, key) => {
          return <Bookmark
            key={key}
            title={item.title}
            url={item.url}
            />
        })}
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