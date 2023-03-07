import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import Buffer from 'buffer';

import ImageSearchWidget from './ImageSearchWidget';

function App() {
  return (
    <div className="App">
      hi.
      <ImageSearchWidget/>
    </div>
  );
}

export default App;

