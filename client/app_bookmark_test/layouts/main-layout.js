import React from 'react';
import Header from '../containers/header';

export default function(props) {
  return (
    <div className="app">
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
}
