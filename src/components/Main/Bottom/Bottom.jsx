import React, { useContext } from "react";

import AnimationContext from "../../../context/AnimationContext";
import StateContext from "../../../context/StateContext";

const Bottom = () => {
  const animation = useContext(AnimationContext);
  const state = useContext(StateContext);

  return (
    <div className="main-bottom">
      <div className="full-currency" onClick={() => animation.animateCurrency('bottom')}>
      {state.bottomCurrency[1]}
      </div>
      <div
        className="amount"
        onClick={() => animation.animateBottomInput("bottom")}
      >
        {state.bottomAmount}
      </div>
      <div className="symbol-currency">{state.bottomCurrency[0]}</div>
    </div>
  );
};

export default Bottom;

// onClick={animation.animateInput()}
