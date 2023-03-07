import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TextInput
  baseFontSize={13}
  darkMode={false}
  description="This is a description for the input"
  disabled={false}
  errorMessage=""
  label="Label"
  optional={false}
  placeholder=""
  sizeVariant="default"
  state="none"
/>

      </header>
    </div>
  );
}

export default App;
