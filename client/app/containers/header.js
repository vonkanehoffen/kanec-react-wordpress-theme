import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { fetchBookmarks } from '../actions/bookmark-actions';

class Header extends Component {

  handleRefreshClick() {
    store.dispatch(fetchBookmarks());
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Bookmark Thing" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton onClick={this.handleRefreshClick} label="Refresh Bookmarks" secondary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Header);