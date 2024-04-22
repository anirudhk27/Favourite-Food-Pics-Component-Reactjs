import React from "react";
import ReactDOM from "react-dom";

const img="https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img className="foodpic" src={img}></img>
    <img className="foodpic" src={img}></img>
    <img className="foodpic" src={img}></img>
  </div>,document.getElementById("root"));
