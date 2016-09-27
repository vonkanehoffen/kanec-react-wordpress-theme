import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default function(props) {
  return (
    <div className="app">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Bookmark Thing" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Refresh Bookmarks" secondary={true} />
        </ToolbarGroup>
      </Toolbar>
      <main>
        {props.children}
      </main>
    </div>
  );
}
