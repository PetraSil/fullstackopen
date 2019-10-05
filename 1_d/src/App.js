import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.clickHandler}>{props.name}</button>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const IncrementGood = () => {
    setGood(good + 1);
  };

  const IncrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const IncrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>RATE UNICAFE SERVICE:</h2>
      <Button name="Good" clickHandler={() => IncrementGood()} />
      <Button name="Neutral" clickHandler={() => IncrementNeutral()} />
      <Button name="Bad" clickHandler={() => IncrementBad()} />
      <h2>INFORMATION:</h2>
      <h3>Good reviews: {good}</h3>
      <h3>Neutral reviews: {neutral}</h3>
      <h3>Bad reviews: {bad}</h3>
    </div>
  );
};

export default App;
