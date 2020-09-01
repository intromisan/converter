import React from 'react';

import './App.css';
import Arrow from './components/Arrow/Arrow';
import Bottom from './components/Bottom/Bottom';
import Top from './components/Top/Top';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Arrow />
        <Top />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
