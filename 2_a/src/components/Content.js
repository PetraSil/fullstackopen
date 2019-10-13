import React from 'react';
import Part from './Part';

const Content = (props) => {
    
    const courseList = props.parts.map( item => (<Part key={item.id} name={item.name} exercises={item.exercises}/>))

    return (
        <div>
            {courseList}
        </div>
    );
};

export default Content;
