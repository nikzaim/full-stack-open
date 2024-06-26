import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 8);
    setSelected(random);
  };

  const handleVote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  };

  let mostVote = 0;
  Object.keys(points).forEach((key) => {
    if (points[key] > points[mostVote]) {
      mostVote = key;
    }
  });
  console.log(mostVote);

  return (
    <>
      <Anecdote anecdotes={anecdotes} selected={selected} points={points} handleVote={handleVote} randomNumber={randomNumber} />
      <MostVote anecdotes={anecdotes} mostVote={mostVote} points={points} />
    </>
  );
};

export default App;

const Anecdote = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[props.selected]}</div>
      <div>has {props.points[props.selected]} votes</div>
      <button onClick={props.handleVote}>vote</button>
      <button onClick={props.randomNumber}>next anecdote</button>
    </div>
  );
};

const MostVote = (props) => {
  if (props.points[props.mostVote] > 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{props.anecdotes[props.mostVote]}</div>
        <div>has {props.points[props.mostVote]} votes</div>
      </div>
    );
  }
};
