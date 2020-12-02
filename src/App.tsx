import React, { useState } from "react";
import "./styles.css";
import "./CoinChart";

export default function App() {
  const [value, setValue] = useState(5);
  return (
    <div className="App">
      <button onClick={() => setValue((x) => x + 1)}>Value {value}</button>
      <h1>Here is our web component</h1>
      <coin-chart xValue={value} />
    </div>
  );
}
