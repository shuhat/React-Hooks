import React from "react";
import { useState } from "react";
import "../style.css"

function AppuseStateHook() {
  //const [ initial state, Function that update the initial state]  //useState is a HOOK
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease} name="tap">
        -
      </button>
      <button onClick={increase} name="tap">
        +
      </button>
    </div>
  );
}
export default AppuseStateHook;
