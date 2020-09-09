import React, { useContext } from "react";

import AnimationContext from "../../context/AnimationContext";
import StateContext from "../../context/StateContext";

const CurrencyList = (props) => {
  const animation = useContext(AnimationContext);
  const state = useContext(StateContext);
  const currencyList = Object.entries(props.currencyList);

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
              <li
                key={i}
                onClick={
                  animation.inputType === "top"
                    ? () => {
                        animation.animateCurrency();
                        state.onTopCurrency([curr[0], curr[1]]);
                      }
                    : () => {
                        animation.animateCurrency();
                        state.onBottomCurrency([curr[0], curr[1]]);
                      }
                }
              >
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
