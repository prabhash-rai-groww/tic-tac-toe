import React, { useState } from 'react';
import './HomePage.css';
import Board from '../Board/Board';
import CheckWinner from './CheckWinner';
import Result from '../Result/Result';

function HomePage() {
    const [winner, setWinner] = useState('');

    function updateWinner(player) {
        setWinner(player);
    }

    function resetGame() {
        setWinner('');
    }

    return (
        <div className='homepage'>
            <div>
                {
                    winner !== '' ? (
                        <div>
                            <Result winner={winner} />
                            <button onClick={() => {resetGame()}}>Reset Game</button>
                        </div>

                    )
                    : <Board CheckWinner={CheckWinner} updateWinner={updateWinner} />
                }
            </div>

        </div>
    )
}

export default HomePage;