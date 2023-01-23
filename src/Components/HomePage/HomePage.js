import React, { useState } from 'react';
import './HomePage.css';
import Board from '../Board/Board';
import Result from '../Result/Result';
import checkWinner from './checkWinner';

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
                        <div className='Homepage_result'>
                            <Result winner={winner} />
                            <button onClick={() => { resetGame() }}>Reset Game</button>
                        </div>

                    )
                        : <Board checkWinner={checkWinner} updateWinner={updateWinner} />
                }
            </div>
        </div>
    )
}

export default HomePage;