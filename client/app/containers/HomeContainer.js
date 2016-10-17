import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import PostsList from '../components/PostsList'

class HomeContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getPosts());
    }

    render() {
        const { posts } = this.props
        console.log(posts);
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
    isFetching: state.isFetching,
    posts: state.posts
})

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => {
//         dispatch(getPosts())
//     }
// })

export default connect(mapStateToProps)(HomeContainer)
