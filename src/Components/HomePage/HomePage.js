import React, {useState} from 'react';
import './HomePage.css';
import Board from '../Board/Board';

function HomePage() {
    const [winner, setWinner] = useState(0);
    function checkWinner() {
        setWinner(1);
    }

    return (
        <div className='homepage'>
            <div>
                <Board />
            </div>

        </div>
    )
}

export default HomePage;