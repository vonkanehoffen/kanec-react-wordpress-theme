import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const BlogPost = (props) => {
    const {
        title, content, link, slug
    } = props.post;
    const displayContent = ( props.expanded ?
        content.rendered :
        content.rendered.split('<!--more-->')[0]
    );
    return (
        <div className="BlogPost">
            Blog post here:
            <h1><Link to={`/blog/${slug}`}>{title.rendered}</Link></h1>
            <p>Probably use slug for link? {slug}</p>
            <div className="content" dangerouslySetInnerHTML={{__html: displayContent}} />
            {/*<pre>{JSON.stringify(props.post, null, 2)}</pre>*/}
        </div>
    );
}

BlogPost.propTypes = {
    post: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired
}

export default BlogPost