import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getLatestPosts, getMorePosts } from '../actions'
import PostsList from '../components/PostsList'

class HomeContainer extends Component {

    componentDidMount() {
        const { gotLatest, params, getLatestPosts } = this.props;
        if(Date.now() - gotLatest > 3600000) {
            getLatestPosts(params.page);
        }
    }

    componentDidUpdate(prevProps) {
        let { params, currentPage, loadMorePosts, getLatestPosts } = this.props;
        currentPage = parseInt(currentPage, 10);
        if(params.page > currentPage) {
            loadMorePosts(params.page);
        } else if(!params.page && currentPage > 1) {
            getLatestPosts();
        }
    }

    render() {
        const { posts, currentPage, params, loadMorePosts } = this.props;
        return (
            <div>
                { posts &&
                    <PostsList posts={posts} />
                }
                {currentPage &&
                <Link to={`/page/${parseInt(currentPage, 10) + 1}`}>Load More</Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    gotLatest: state.gotLatest,
    currentPage: state.currentPage
})

const mapDispatchToProps = dispatch => ({
    getLatestPosts: (page) => {
        dispatch(getLatestPosts(page));
    },
    loadMorePosts: (page) => {
        dispatch(getMorePosts(page))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
