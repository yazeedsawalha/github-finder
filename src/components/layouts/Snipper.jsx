import React from "react";
import spinner from "./assets/snipper.gif";
function Snipper() {
  return (
    <dev className="w-100 mt20">
      <img width={80} height={80} src={spinner} alt="loading .." className="text-center mx-auto"></img>
    </dev>
  );
}

export default Snipper;
