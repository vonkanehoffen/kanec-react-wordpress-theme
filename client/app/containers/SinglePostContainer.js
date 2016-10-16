import React, {Component} from 'react';
import * as wpApi from '../api/wpApi';
import BlogPost from '../components/BlogPost';

class BlogContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            posts: []
        };
    }

    componentDidMount() {
        wpApi.get('posts', {slug: this.props.params.slug}).then((json) => {
            this.setState({posts: json});
        })
    }

    render() {
        return (
            <div className="posts">
                <h3>SinglePostContainer</h3>
                {this.state.posts.map( (post, i) => {
                    return <BlogPost post={post} key={i} />
                })}
            </div>
        );
    }
}

export default BlogContainer;
