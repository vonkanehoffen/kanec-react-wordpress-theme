import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Bookmark = (props) => {
  return (
    <div className="Bookmark">
      <RaisedButton
        label={props.title}
        href={props.url}
        primary={true} />
    </div>
  );
}

Bookmark.propTypes = {}

export default Bookmark