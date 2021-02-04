import React from "react";
import { useState,useEffect } from "react";
import "../style.css"

function AppuseEffectHook2() {
  //const [ initial state, Function that update the initial state]  //useState is a HOOK
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
      setwindowWidth(window.innerWidth)
  }
  
  // useEffect(Arrow function, an array when its value gets changed this hook function will get a run)
 useEffect(()=>{window.addEventListener('resize',handleResize)}, [windowWidth])

  return (
    <div className="container">
      <h2>Window Width: {windowWidth} </h2>
    </div>
  );
}
export default AppuseEffectHook2;
