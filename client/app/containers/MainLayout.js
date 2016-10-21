import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class MainLayout extends Component {

    render() {
        const { isFetching, children } = this.props;
        return (
            <div className="MainLayout">
                <nav><Link to="/">Home</Link></nav>
                {isFetching && <h4>Fetching...</h4> }
                {children}
                <footer>Footer here</footer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
})

export default connect(mapStateToProps)(MainLayout)