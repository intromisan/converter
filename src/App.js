import React, { useState, useEffect } from 'react';

import './App.css';
import AnimationContext from './context/AnimationContext';
import Main from './components/Main/Main';
import CurrencyList from './components/CurrencyList/CurrencyList';
import TopInput from './components/Input/TopInput';
import StateContext from './context/StateContext';
import BottomInput from './components/Input/BottomInput';

function App() {
  const [currencyAnimation, setcurrencyAnimation] = useState(false);
  const [topInputAnimation, setTopInputAnimation] = useState(false);
  const [bottomInputAnimation, setBottomInputAnimation] = useState(false);
  const [inputType, setInputType] = useState('');
  const [spin, setSpin] = useState(false)
  const [direction, setDirection] = useState('');
  const [topAmount, setTopAmount] = useState(0);
  const [bottomAmount, setBottomAmount] = useState(0)

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

  useEffect(() => {
    setSpin(false)
  }, []);

  return (
    <StateContext.Provider value={{
      topAmount: topAmount,
      bottomAmount: bottomAmount,
      onTopAmount: (amount) => amount !== '' ? setTopAmount(amount) : setTopAmount(0),
      onBottomAmount: (amount) => amount !== '' ? setBottomAmount(amount) : setBottomAmount(0)
    }}>
      <AnimationContext.Provider value={{
        currencyAnimation: currencyAnimation,
        topInputAnimation: topInputAnimation,
        bottomInputAnimation: bottomInputAnimation,
        inputType: inputType,
        spin: spin,
        animateCurrency: () => setcurrencyAnimation(!currencyAnimation),
        animateTopInput: (inputType) => {
          setTopInputAnimation(!topInputAnimation);
          setInputType(inputType);
        },
        animateBottomInput: (inputType) => {
          setBottomInputAnimation(!bottomInputAnimation);
          setInputType(inputType);
        },
        animateSpin: (dir) => {
          if (direction === '') {
            setDirection(dir);
            setSpin(!spin);
          } else {
            if (dir !== direction) {
              setDirection(dir);
              setSpin(!spin);
            }
          }
        }
      }}>
        <div className="App">
          <div className="container">
            <Main />
            <CurrencyList
              currencyList={currencies}
            />
            <TopInput />
            <BottomInput />
          </div>
        </div>
      </AnimationContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
