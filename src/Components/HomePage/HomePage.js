import React, { useState } from 'react';
import Board from '../Board/Board';
import CharChoice from '../CharChoice/CharChoice';
import Result from '../Result/Result';
import checkWinner from './checkWinner';
import './HomePage.css';

function HomePage() {
    const [winner, setWinner] = useState('');
    const [selectedChar, setselectedChar] = useState('');
    const [moves, setMoves] = useState(0);
    const [resetGame, setResetGame] = useState(false);

    function selectChar(symbol) {
        setselectedChar(symbol);
    }

    function updateWinner(player) {
        setWinner(player);
    }

    function updateMoves(value) {
        setMoves(value);
    }

    function resetingGame() {
        setResetGame(true);
        updateWinner('');
        setselectedChar('');
        setMoves(1);
    }

    return (
        <div className='homepage'>
            <div>
                {
                    winner !== '' || moves === 9 ? (
                        <div className='Homepage_result'>
                            <Result winner={winner} moves={moves} />
                        </div>
                    )
                        : (
                            <div>
                                {
                                    selectedChar ?
                                        <Board checkWinner={checkWinner} updateWinner={updateWinner} resetGame={resetGame} setResetGame={setResetGame} selectedChar={selectedChar} updateMoves={updateMoves}/>
                                        :
                                        <CharChoice selectChar={selectChar} />
                                }
                            </div>
                        )
                }
            </div>

            {
                selectedChar ?
                    <div className='reset'>
                        <button className='button' onClick={() => { resetingGame() }}>Reset Game</button>
                    </div>
                    :
                    <div />
            }
        </div>
    )
}

export default HomePage;