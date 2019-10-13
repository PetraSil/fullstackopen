import React from 'react';

const Total = ({ sum }) => {

    const total = sum.map( item => item.exercises).reduce((accumulating, current) => accumulating + current )

    return (
        <div>
            <strong>Number of exercises: {total}</strong>
        </div>
    );
};

export default Total;
