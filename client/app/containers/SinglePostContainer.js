import React, {Component} from 'react';
import { connect } from 'react-redux'
import { find } from 'lodash'
import { getSinglePost } from '../actions'
import BlogPost from '../components/BlogPost';

class BlogContainer extends Component {

    componentDidMount() {
        const { dispatch, params, posts } = this.props;
        const currentPost = find(posts, { slug: params.slug });
        if(!currentPost) {
            dispatch(getSinglePost(params.slug));
        }
    }

    render() {
        const { posts, params } = this.props;
        const currentPost = find(posts, { slug: params.slug });
        return (
            <div className="posts">
                <h3>SinglePostContainer</h3>
                {currentPost && <BlogPost post={currentPost} expanded={true} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    posts: state.posts
})

export default connect(mapStateToProps)(BlogContainer)