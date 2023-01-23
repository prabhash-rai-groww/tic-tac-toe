import React from 'react';
import './Result.css';

function Result({ winner, moves }) {
    return (
        <div className='Result'>
            {
                winner === '' && moves === 9 ? <h1>It's a tie</h1> : <h1>{winner} won the game.</h1>
            }
        </div>
    )
}

export default Result;
