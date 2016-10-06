import React, {Component} from 'react';

class MainLayout extends Component {

    render() {
        return (
            <div className="MainLayout">
                <nav>Nav here</nav>
                {this.props.children}
                <footer>Footer here</footer>
            </div>
        )
    }
}
export default MainLayout;
