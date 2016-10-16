import React, {Component} from 'react';
import * as wpApi from '../api/wpApi';
import BlogPost from '../components/BlogPost';

class PostsListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            posts: []
        };
    }

    componentDidMount() {
        wpApi.get('posts').then((json) => {
            this.setState({posts: json});
        })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map( (post, i) => {
                    return <BlogPost post={post} key={i} expanded={false} />
                })}
            </div>
        );
    }
}

export default PostsListContainer;
