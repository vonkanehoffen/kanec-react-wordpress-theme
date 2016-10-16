import React, {Component} from 'react';
import { Link } from 'react-router'


class MainLayout extends Component {

    render() {
        return (
            <div className="MainLayout">
                <nav><Link to="/">Home</Link></nav>
                {this.props.children}
                <footer>Footer here</footer>
            </div>
        )
    }
}
export default MainLayout;
