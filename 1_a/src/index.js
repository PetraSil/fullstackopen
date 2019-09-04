import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <h3>Total sum of exercises: {props.number1 + props.number2 + props.number3}</h3>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <h3>{props.part}</h3>
            <p>{props.number}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.part1} number = {props.number1}/>
            <Part part = {props.part2} number = {props.number2}/>
            <Part part = {props.part3} number = {props.number3}/>
        </div>
    )
}

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header title = {course} />
            <Content part1 = {part1} part2 = {part2} part3 = {part3} number1 = {exercises1} number2 = {exercises2} number3 = {exercises3} />
            <Total number1 = {exercises1} number2 = {exercises2} number3 = {exercises3} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
