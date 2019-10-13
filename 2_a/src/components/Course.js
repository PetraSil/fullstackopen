import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} name={course.parts.name} exercises={course.parts.exercises} />
            <Total sum={course.parts}/>
        </div>
    );
};

export default Course;
