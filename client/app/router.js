import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './containers/MainLayout';

// Pages
import BlogContainer from './containers/BlogContainer';
import PageContainer from './containers/PageContainer';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={BlogContainer} />
            <Route path="/page" component={PageContainer} />
        </Route>
    </Router>
);
