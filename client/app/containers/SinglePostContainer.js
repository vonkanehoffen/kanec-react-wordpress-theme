import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import BlogPost from '../components/BlogPost';

class BlogContainer extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(getPosts({
            slug: params.slug
        }));
    }

    render() {
        const { posts } = this.props
        return (
            <div className="posts">
                <h3>SinglePostContainer</h3>
                {posts && posts.map( (post, i) => {
                    return <BlogPost post={post} key={i} expanded={true} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    posts: state.posts
})

export default connect(mapStateToProps)(BlogContainer)