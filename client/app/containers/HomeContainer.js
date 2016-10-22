import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getLatestPosts } from '../actions'
import PostsList from '../components/PostsList'

class HomeContainer extends Component {

    componentDidMount() {
        const { gotLatest, params, dispatch } = this.props;
        if(Date.now() - gotLatest > 3600000) {
            dispatch(getLatestPosts(params.page));
        }
    }

    render() {
        const { posts, nextPage } = this.props;
        return (
            <div>
                { posts &&
                    <PostsList posts={posts} />
                }
                <Link to={`/page/${nextPage}`}>Load More</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    gotLatest: state.gotLatest,
    nextPage: state.nextPage
})

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => {
//         dispatch(getPosts())
//     }
// })

export default connect(mapStateToProps)(HomeContainer)
