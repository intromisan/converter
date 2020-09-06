import React from "react";

export default React.createContext({
  currencyAnimation: false,
  topInputAnimation: false,
  bottomInputAnimation: false,
  inputType: "",
  spin: false,
  direction: "",
  topAmount: 0,
  bottomAmount: 0,
});
