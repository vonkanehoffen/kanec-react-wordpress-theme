import React, { PropTypes } from 'react';
import BlogPost from './BlogPost';

const PostsList = ({ posts }) => (
    <div className="posts">
        Post list
        {posts.map( (post, i) => {
            return <BlogPost post={post} key={i} expanded={false} />
        })}
    </div>
)

export default PostsList;
