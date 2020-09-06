import React, { useContext, useState } from "react";

import AnimationContext from "../../context/AnimationContext";
import StateContext from "../../context/StateContext";

const BottomInput = () => {
  const [amount, setAmount] = useState("");
  const animation = useContext(AnimationContext);
  const state = useContext(StateContext);
  return (
    <div
      className={
        animation.bottomInputAnimation
          ? "bottom-amount-input slideup-bottom"
          : "bottom-amount-input"
      }
    >
      <div className="clear" onClick={() => setAmount("")}>
        tap to delete
      </div>
      <div className="input bottom">
        <input
          className="bottom"
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
      </div>
      <div className="dial-pad">
        <div className="row">
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 1)}
          >
            1
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 2)}
          >
            2
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 3)}
          >
            3
          </div>
        </div>
        <div className="row">
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 4)}
          >
            4
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 5)}
          >
            5
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 6)}
          >
            6
          </div>
        </div>
        <div className="row">
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 7)}
          >
            7
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 8)}
          >
            8
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 9)}
          >
            9
          </div>
        </div>
        <div className="row">
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + ".")}
          >
            .
          </div>
          <div
            className="dial-btn bottom"
            onClick={() => setAmount((prevAmount) => prevAmount + 0)}
          >
            0
          </div>
          <div
            className={`dial-btn check bottom`}
            onClick={() => {
              animation.animateBottomInput();
              animation.animateSpin(animation.inputType);
              state.onBottomAmount(amount);
            }}
          >
            <i className="material-icons">check</i>
          </div>
        </div>
      </div>
      <div className="return" onClick={animation.animateBottomInput}>
        <i className="material-icons">expand_more</i>
      </div>
    </div>
  );
};

export default BottomInput;
