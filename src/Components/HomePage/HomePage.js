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

    return (
        <div className='homepage'>
            <div>
                {
                    winner !== '' ? <Result winner={winner} />
                        : <Board CheckWinner={CheckWinner} updateWinner={updateWinner} />
                }
            </div>

        </div>
    )
}

export default HomePage;