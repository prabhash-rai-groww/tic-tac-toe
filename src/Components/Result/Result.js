import React from 'react';
import './Result.css';

function Result({ winner, moves }) {
    return (
        <div className='Result'>
            {
                winner === '' && moves === 9 ? <p>It's a tie</p> : <p>{winner} won the game.</p>
            }
        </div>
    )
}

export default Result;
