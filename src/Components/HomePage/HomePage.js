import React from 'react';
import './HomePage.css';
import Board from '../Board/Board';
import CheckWinner from './CheckWinner';

function HomePage() {

    return (
        <div className='homepage'>
            <div>
                <Board CheckWinner={CheckWinner}/>
            </div>

        </div>
    )
}

export default HomePage;