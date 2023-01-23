import React, { useState } from 'react';
import Board from '../Board/Board';
import Result from '../Result/Result';
import checkWinner from './checkWinner';
import './HomePage.css';

function HomePage() {
    const [winner, setWinner] = useState('');
    const [resetGame, setResetGame] = useState(false);

    function updateWinner(player) {
        setWinner(player);
    }

    function resetingGame() {
        setResetGame(true);
        updateWinner('');
    }

    return (
        <div className='homepage'>
            <div>
                {
                    winner !== '' ? (
                        <div className='Homepage_result'>
                            <Result winner={winner} />
                        </div>
                    )
                        : <Board checkWinner={checkWinner} updateWinner={updateWinner} resetGame={resetGame} setResetGame={setResetGame}/>
                }
            </div>

            <div className='reset'>
            <button className='button' onClick={() => { resetingGame() }}>Reset Game</button>
            </div>
        </div>
    )
}

export default HomePage;