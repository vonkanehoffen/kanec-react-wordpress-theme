import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getLatestPosts } from '../actions'
import PostsList from '../components/PostsList'

class HomeContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getLatestPosts());
    }

    render() {
        const { posts } = this.props;
        return (
            <div>
                { posts &&
                    <PostsList posts={posts} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts
})

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => {
//         dispatch(getPosts())
//     }
// })

export default connect(mapStateToProps)(HomeContainer)
