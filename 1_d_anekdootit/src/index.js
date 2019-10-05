import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ event, name }) => {
    return (
      <button onClick={event}>{name}</button>
    );
};

const App = (props) => {
  const [points, setPoints] = useState( [0, 0, 0, 0, 0, 0] );
	const [selected, setSelected] = useState(0);
	
	const selectedHandler = (num = selected) => {
		setSelected(num);
	}

	const pointsHandler = () => {
		const pointsCopy = [ ...points ];
		pointsCopy[selected] +=1;
		setPoints(pointsCopy);
	}

  return (
    <div>
			<h2>ANECDOTE OF THE DAY:</h2>
      {props.anecdotes[selected]}
      <p>This anecdote has {points[selected]} votes!</p>
			<Button event={() => pointsHandler()} name="Vote" />
      <Button event={() => selectedHandler(Math.floor(Math.random() * 6))} name="Change anecdote" />
			<h2>ANECDOTE WITH THE MOST VOTES:</h2>
			{props.anecdotes[points.indexOf(Math.max(...points))]}
			<h4>It has {Math.max(...points)} votes!</h4>
		</div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root')
);