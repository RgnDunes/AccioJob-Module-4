import React, { useState } from "react";

function App() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [op, setOp] = useState(0);
  const [opMap, setOpMap] = useState({
    0: "Siblings",
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
  });

  const calculateRelation = () => {
    const mapper1 = {};
    const mapper2 = {};

    const resultMapper = {};

    for (let i = 0; i < str1.length; i++) {
      if (mapper1[str1[i]]) mapper1[str1[i]] += 1;
      else mapper1[str1[i]] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
      if (mapper2[str2[i]]) mapper2[str2[i]] += 1;
      else mapper2[str2[i]] = 1;
    }

    for (let i in mapper1) {
      if (Object.keys(mapper2).includes(i)) {
        resultMapper[i] = mapper1[i] + mapper2[i] - 1;
      }
    }

    let sum = 0;

    for (let i in resultMapper) {
      sum += parseInt(resultMapper[i]);
    }

    console.log({ mapper1, mapper2, resultMapper, sum }, sum % 6);
    setOp(sum % 6);
  };

  const clear = () => {
    setStr1("");
    setStr2("");
  };

  return (
    <div>
      Str1 :
      <input
        data-testid="input1"
        type="text"
        value={str1}
        onChange={(e) => {
          const val1 = e.target.value;
          if (val1) setStr1(val1.toLowerCase());
        }}
      />
      <br />
      Str2 :
      <input
        data-testid="input2"
        type="text"
        value={str2}
        onChange={(e) => {
          setStr2(e.target.value?.toLowerCase());
        }}
      />
      <br />
      <button onClick={calculateRelation} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <h3 data-testid="answer">{opMap[op]}</h3>
      <button onClick={clear} data-testid="clear">
        Clear
      </button>
    </div>
  );
}

export default App;
