import React, {PropTypes} from 'react'

const Bookmark = (props) => {
  return (
    <div className="Bookmark">
      <a href={props.url}>{props.title}</a>
    </div>
  );
}

Bookmark.propTypes = {}

export default Bookmark