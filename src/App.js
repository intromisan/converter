import React, { useState } from 'react';

import './App.css';
import Main from './components/Main/Main';
import CurrencyList from './components/CurrencyList/CurrencyList';

function App() {
  const [slideLeft, setSlideLeft] = useState(false);

  const currencies = {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev"
  }

  return (
    <div className="App">
      <button onClick={() => setSlideLeft(true)}>Slide Left</button>
      <button onClick={() => setSlideLeft(false)}>Slide Right</button>
      <div className="container">
        <Main />
        <CurrencyList
          currencyList={currencies}
          left={slideLeft} />
      </div>
    </div>
  );
}

export default App;
