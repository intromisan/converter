import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="top__full-currency">
            United States Dollar
          </div>
          <div className="top__amount">
            200
          </div>
          <div className="top__symbol-currency">
            USD
          </div>
        </div>
        <div className="arrow">
          <i class="small material-icons">arrow_upward</i>
        </div>
        <div className="bottom">
          <div className="bottom__full-currency">
            Euro
          </div>
          <div className="bottom__amount">
            187
          </div>
          <div className="bottom__symbol-currency">
            EUR
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
