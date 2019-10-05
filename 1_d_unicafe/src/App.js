import React, { useState, useEffect } from 'react';

const Button = ({clickHandler, name}) => {
  return (
    <button onClick={clickHandler}>{name}</button>
  );
};

const Statistics = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text} reviews: {value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(NaN);
  const [average, setAverage] = useState(NaN);

  const IncrementGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const IncrementNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const IncrementBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const calculateStats = () => {
    setPositive((good / all ) * 100);
    setAverage((good - bad) / all);
  };

  useEffect(() => {
    calculateStats();
  });

  if(all > 0) {
  return (
    <div>
      <h1>RATE UNICAFE SERVICE</h1>
      <Button name="Good" clickHandler={() => IncrementGood()} />
      <Button name="Neutral" clickHandler={() => IncrementNeutral()} />
      <Button name="Bad" clickHandler={() => IncrementBad()} />
      <h2>FEEDBACK INFORMATION:</h2>
      <Statistics text="Good" value={good}/>
      <Statistics text="Neutral" value={neutral} />
      <Statistics text="Bad" value={bad} />
      <Statistics text="All" value={all} />
      <h2>STATISTICS INFORMATION:</h2>
      <Statistics text="Average" value={average} />
      <Statistics text="Positive" value={positive} />
    </div>
  );
  } else {
    return (
      <div>
        <h1>RATE UNICAFE SERVICE</h1>
        <Button name="Good" clickHandler={() => IncrementGood()} />
        <Button name="Neutral" clickHandler={() => IncrementNeutral()} />
        <Button name="Bad" clickHandler={() => IncrementBad()} />
        <h2>WAITING FOR FEEDBACK</h2>
      </div>
    );
  };
};

export default App;
