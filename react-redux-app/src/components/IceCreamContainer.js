import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function IceCreamContainer() {
  const numberOfCakes = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams from hooks container {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy cake </button>
    </div>
  );
}

export default IceCreamContainer;
