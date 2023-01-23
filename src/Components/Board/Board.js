import React, { useState, useEffect } from 'react';
import './Board.css';

function Board({ checkWinner, updateWinner, resetGame, setResetGame, selectedChar, updateMoves }) {

    const newboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const [currentBoard, setCurrentBoard] = useState(newboard);
    const [winner, setWinner] = useState('');
    const [lastClicked, setLastClicked] = useState([]);
    const [playerTwoChar, setPlayerTwoChar] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState('Player 1');
    let [moves, setMoves] = useState(0);

    useEffect(() => {
        if (selectedChar === 'X') {
            setPlayerTwoChar('O');
        }
        else {
            setPlayerTwoChar('X');
        }
    }, []);

    function cellClicked(rowNo, colNo) {
        setLastClicked([rowNo, colNo]);
        let oldBoard = [...currentBoard];

        if (oldBoard[rowNo][colNo] !== '') return;

        if (moves % 2 === 1) {
            oldBoard[rowNo][colNo] = playerTwoChar;
            setMoves(moves + 1);
            setCurrentPlayer("Player 1");
        }
        else {
            oldBoard[rowNo][colNo] = selectedChar;
            setMoves(moves + 1);
            setCurrentPlayer("Player 2");
        }

        setCurrentBoard(oldBoard);

        if (moves >= 4) {
            setWinner(checkWinner(currentBoard));
        }
    }
    
    function undoLast() {
        if (lastClicked.length === 0) return;

        if (moves % 2 === 1) {
            setCurrentPlayer("Player 1");
        }
        else {
            setCurrentPlayer("Player 2");
        }

        let oldBoard = [...currentBoard];
        oldBoard[lastClicked[0]][lastClicked[1]] = '';

        setMoves(moves - 1);
        setLastClicked([]);
        setCurrentBoard(oldBoard);
    }

    useEffect(() => {
        updateMoves(moves);
    }, [moves])

    useEffect(() => {
        if (resetGame) {
            setCurrentBoard(newboard);
            setResetGame(false);
            setLastClicked([]);
            setMoves(0);
        }

        if (winner !== '') {
            updateWinner(winner);
            return;
        }
    }, [winner, resetGame]);

    return (
        <div className='Board'>
            <div className='board_turn'>{currentPlayer} turn</div>
            <div className='undo'>
                {
                    moves > 0 && lastClicked.length ? <button className='button' onClick={undoLast}>Undo</button> : <div />
                }
            </div>
            <table>
                <tbody>
                    {
                        currentBoard.map(
                            function (rowElement, rowNo) {
                                return <tr key={rowNo} className='board_row'>
                                    {
                                        rowElement.map(
                                            function (cellElement, colNo) {
                                                return <td key={colNo} className='board_cell' onClick={() => cellClicked(rowNo, colNo)}>{cellElement}</td>;
                                            }
                                        )
                                    }
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Board;