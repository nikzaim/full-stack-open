import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;

  const score = {
    good: 1,
    neutral: 0,
    bad: -1,
  };

  const total = good * score.good + neutral * score.neutral + bad * score.bad;

  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={handleGood} />
      <Button name="neutral" onClick={handleNeutral} />
      <Button name="bad" onClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} total={total} positive={positive} />
    </div>
  );
};

export default App;

const Button = (props) => {
  return <button onClick={props.onClick}>{props.name}</button>;
};

const Statistics = (props) => {
  // ...
  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.total / props.all}</p>
      <p>positive {props.positive} %</p>
    </>
  );
};
