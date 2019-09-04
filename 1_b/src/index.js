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
            <h3>Total sum of exercises: {props.part[0].exercises + 
                props.part[1].exercises + props.part[2].exercises}
            </h3>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <h3>{props.part.name}</h3>
            <p>{props.part.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.part[0]} />
            <Part part = {props.part[1]} />
            <Part part = {props.part[2]}  />
        </div>
    )
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header title = {course.name} />
            <Content part = {course.parts} />
            <Total part = {course.parts} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
