import React from 'react';
import './App.css';
import ImageSearchWidget from './ImageSearchWidget';

import UploadImageToS3WithNativeSdk from './UploadImageToS3WithNativeSdk';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Upload an image to our image store or search for a phrase among our image store</h1>
        <ImageSearchWidget/>
        <br/>
        <UploadImageToS3WithNativeSdk/>
      </div>
    </div>
  );
}

export default App;

