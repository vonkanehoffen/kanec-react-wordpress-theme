import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './containers/MainLayout';

// Pages
import HomeContainer from './containers/HomeContainer';
import SinglePostContainer from './containers/SinglePostContainer';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={HomeContainer} />
            <Route path="/page/:page" component={HomeContainer} />
            <Route path="/blog/:slug" component={SinglePostContainer} />
        </Route>
    </Router>
);
