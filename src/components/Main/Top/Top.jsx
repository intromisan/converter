import React, { useContext } from "react";

import AnimationContext from "../../../context/AnimationContext";
import StateContext from "../../../context/StateContext";

const Top = () => {
  const animation = useContext(AnimationContext);
  const state = useContext(StateContext);

  return (
    <div className="main-top">
      <div className="full-currency" onClick={() => animation.animateCurrency('top')}>
        {state.topCurrency[1]}
      </div>
      <div className="amount" onClick={() => animation.animateTopInput("top")}>
        {state.topAmount}
      </div>
      <div className="symbol-currency">{state.topCurrency[0]}</div>
    </div>
  );
};

export default Top;

// onClick={() => animation.animateInput}
