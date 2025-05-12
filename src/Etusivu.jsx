import React from "react";
import TuoteLista from "./TuoteLista";

const Etusivu = ({ onAddToCart }) => {
  return (
    <div>
      <TuoteLista onAddToCart={onAddToCart} />
    </div>
  );
};

export default Etusivu;
