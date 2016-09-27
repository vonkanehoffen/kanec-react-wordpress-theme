import React from 'react';

export default function(props) {
  return (
    <div className="app">
      <h1>Main Layout</h1>
      <main>
        {props.children}
      </main>
    </div>
  );
}
