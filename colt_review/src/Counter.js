import React, { useState } from "react";

const onButClick = () => {};

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{num}</h2>
      <button
        style={{ margin: "auto", display: "block", marginBottom: "10px" }}
      onClick={()=>{setNum(num+1)}}>
        +1
      </button>
      <button
        style={{ margin: "auto", display: "block", marginTop: "30px" }}
        onClick={() => {
          setNum(num-1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
