'use strict';

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { Provider } from 'react-redux';
// import store from './app/store';
import router from './app/router';

// Temporary fix for material-ui apparently.
// https://www.npmjs.com/package/material-ui#react-tap-event-plugin
injectTapEventPlugin();

// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.

// ReactDOM.render(
//   <MuiThemeProvider>
//     <Provider store={store}>{router}</Provider>
//   </MuiThemeProvider>,
//   document.getElementById('js-main')
// );

ReactDOM.render(router, document.getElementById('js-main'));

