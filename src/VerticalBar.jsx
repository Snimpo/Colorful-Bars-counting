import React, { useState } from "react";

function VerticalBar() {
  const [barHeight, setBarHeight] = useState(100); // Initial height of the bar in pixels

  const incrementHeight = () => setBarHeight((prevHeight) => prevHeight + 10);
  const decrementHeight = () =>
    setBarHeight((prevHeight) => Math.max(prevHeight - 10, 0));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: `${barHeight}px`,
            backgroundColor: "blue",
            marginBottom: "20px",
          }}
        />
        <button onClick={incrementHeight} style={{ margin: "10px" }}>
          Increase
        </button>
        <button onClick={decrementHeight} style={{ margin: "10px" }}>
          Decrease
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: `${barHeight}px`,
            backgroundColor: "red",
            marginBottom: "20px",
          }}
        />
        <button onClick={incrementHeight} style={{ margin: "10px" }}>
          Increase
        </button>
        <button onClick={decrementHeight} style={{ margin: "10px" }}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default VerticalBar;
