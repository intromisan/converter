import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import AnimationContext from './context/AnimationContext';
import Main from './components/Main/Main';
import CurrencyList from './components/CurrencyList/CurrencyList';
import TopInput from './components/Input/TopInput';
import StateContext from './context/StateContext';
import BottomInput from './components/Input/BottomInput';

const keyAPI = '7f7394a35d139c82473a123b5297bd6f';
const latestEndpoint = 'latest';
const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
  const [currencyAnimation, setcurrencyAnimation] = useState(false);
  const [topInputAnimation, setTopInputAnimation] = useState(false);
  const [bottomInputAnimation, setBottomInputAnimation] = useState(false);
  const [inputType, setInputType] = useState('');
  const [spin, setSpin] = useState(false)
  const [direction, setDirection] = useState('');
  const [topAmount, setTopAmount] = useState(0);
  const [bottomAmount, setBottomAmount] = useState(0);
  const [currencies, setCurrencies] = useState({});
  const [topCurrency, setTopCurrency] = useState(['EUR', 'Euro']);
  const [bottomCurrency, setBottomCurrency] = useState(['USD', 'United State Dollar']);
  const [topRate, setTopRate] = useState(0);
  const [bottomRate, setBottomRate] = useState(0);

  useEffect(() => {
    setSpin(false)
  }, []);

  useEffect(() => {
    axios.get(`http://data.fixer.io/api/symbols?access_key=${keyAPI}`)
      .then((res) => {
        setCurrencies(res.data.symbols)
      })
      .catch(err => console.log(err))
  }, [topAmount, topCurrency, bottomCurrency]);

  useEffect(() => {
    axios.get(`http://data.fixer.io/api/${latestEndpoint}?access_key=${keyAPI}`)
      .then((res) => {
        const newList = (Object.entries(res.data.rates))
        const topIndex = newList.findIndex(entry => entry[0] === topCurrency[0])
        const bottomIndex = newList.findIndex(entry => entry[0] === bottomCurrency[0])
        setTopRate(newList[topIndex][1])
        setBottomRate(newList[bottomIndex][1])
        // setTopAmount((topRate * bottomAmount / bottomRate).toFixed(2));
        // setBottomAmount((bottomRate * bottomAmount / topRate).toFixed(2));
        console.log(topIndex, bottomIndex)
      })
      .catch((err) => console.log(err))
  }, [topCurrency, bottomCurrency]);

  // useEffect(() => {
  //   setBottomAmount((bottomRate * bottomAmount / topRate).toFixed(2));
  // }, [bottomCurrency])

  return (
    <StateContext.Provider value={{
      topAmount: topAmount,
      bottomAmount: bottomAmount,
      onTopAmount: (amount) => {
        if (amount !== '') {
          setTopAmount(amount);
          setBottomAmount((bottomRate * amount / topRate).toFixed(2));
        } else setTopAmount(0)
      },
      onBottomAmount: (amount) => {
        if (amount !== '') {
          setTopAmount((topRate * amount / bottomRate).toFixed(2));
          setBottomAmount(amount);
        } else setBottomAmount(0)
      },
      topCurrency: topCurrency,
      bottomCurrency: bottomCurrency,
      onTopCurrency: ([symbol, currency]) => setTopCurrency([symbol, currency]),
      onBottomCurrency: ([symbol, currency]) => setBottomCurrency([symbol, currency])
    }}>
      <AnimationContext.Provider value={{
        currencyAnimation: currencyAnimation,
        topInputAnimation: topInputAnimation,
        bottomInputAnimation: bottomInputAnimation,
        inputType: inputType,
        spin: spin,
        animateCurrency: (type) => {
          setInputType(type);
          setcurrencyAnimation(!currencyAnimation)
        },
        animateTopInput: (inputType) => {
          setInputType(inputType);
          setTopInputAnimation(!topInputAnimation);
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
