import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Bookmarks = ({bookmarks}) => (
  <div className="bookmarks">
    {bookmarks.map( item =>
      <RaisedButton
        label={item.title}
        href={item.url}
        primary={true}
        key={item.id}
        style={{ marginRight: '10px' }}
      />
    )}
  </div>
);

Bookmarks.propTypes = {}

export default Bookmarks