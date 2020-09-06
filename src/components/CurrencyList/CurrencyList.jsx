import React, { useContext } from "react";

import AnimationContext from "../../context/AnimationContext";

const CurrencyList = (props) => {
  const animation = useContext(AnimationContext);
  const currencyList = Object.entries(props.currencyList);
  // console.log(currencyList)
  return (
    <div
      className={
        animation.currencyAnimation
          ? "currency-list slideleft"
          : "currency-list"
      }
    >
      <div className="return-btn" onClick={animation.animateCurrency}>
        <i className="material-icons">arrow_back</i>
      </div>
      <div className="currencies">
        <ul>
          {currencyList.map((curr, i) => {
            return (
              <li key={i}>
                {curr[1]} <span>{curr[0]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrencyList;
