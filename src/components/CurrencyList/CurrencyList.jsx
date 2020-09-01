import React from 'react';

const CurrencyList = (props) => {

    const currencyList = Object.entries(props.currencyList)
    // console.log(currencyList)
    return (
        <div className={props.left ? 'currency-list slideleft' : 'currency-list'} >
          <div className="return-btn">
            <i className="material-icons">arrow_back</i>
          </div>
          <div className="currencies">
              <ul>
                {currencyList.map((curr, i) => {
                    return <li key={i}>{curr[1]} <span>{curr[0]}</span></li>
                })}
              </ul>
          </div>
        </div>
    );
}

export default CurrencyList;

