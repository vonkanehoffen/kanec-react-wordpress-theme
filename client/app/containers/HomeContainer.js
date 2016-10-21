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
        const { posts, isFetching } = this.props;
        return (
            <div>
                { isFetching && <h4>Fetching...</h4> }
                { posts &&
                    <PostsList posts={posts} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    posts: state.posts
})

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => {
//         dispatch(getPosts())
//     }
// })

export default connect(mapStateToProps)(HomeContainer)
