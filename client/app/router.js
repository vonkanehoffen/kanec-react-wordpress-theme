import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main-layout';

// Pages
import BookmarkListContainer from './containers/bookmark-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={BookmarkListContainer} />
    </Route>
  </Router>
);
