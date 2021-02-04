import React from "react";
import { useState,useEffect } from "react";
import "../style.css"

function AppuseEffectHook() {
  //const [ initial state, Function that update the initial state]  //useState is a HOOK
  const [resourceType, setresourceType] = useState('Posts');
  const [items, setItems] = useState([]);
  
  // useEffect(function, an array when its value gets changed my hooks will get a run)
  useEffect( ()=>{fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))},[resourceType] )

  return (
    <div className="container">
      <button onClick={()=>{setresourceType("Posts")}}>Posts</button>
      <button onClick={()=>{setresourceType("Users")}}>Users</button>
      <button onClick={()=>{setresourceType("Comments")}}>Comments</button>
      <h2>{resourceType}</h2>
      {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}
export default AppuseEffectHook;
