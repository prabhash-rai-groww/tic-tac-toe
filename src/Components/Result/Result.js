import React from 'react';
import './Result.css';

function Result (props) {
    const winner = props.winner;

    return (
        <div className='Result'>
            {winner} won the game.
        </div>
    )
}

export default Result;
