import React, { useContext } from "react";

import AnimationContext from "../../../context/AnimationContext";

const Arrow = () => {
  const animation = useContext(AnimationContext);
  return (
    <div className="arrow">
      <i className={animation.spin ? "material-icons spin" : "material-icons"}>
        arrow_upward
      </i>
    </div>
  );
};

export default Arrow;
