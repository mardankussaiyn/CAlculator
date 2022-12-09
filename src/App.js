import React from 'react';

import Splitter from './components/Calculator/Splitter';
import Header from './components/Header/Header';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Splitter/>
    </div>
  );
}

export default App;
