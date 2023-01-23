import React, { useState, useEffect } from 'react';
import './Board.css';

function Board({ checkWinner, updateWinner, resetGame, setResetGame }) {

    const newboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const [currentBoard, setCurrentBoard] = useState(newboard);
    const [winner, setWinner] = useState('');
    const [lastClicked, setLastClicked] = useState([]);

    let [moves, setMoves] = useState(1);

    function cellClicked(rowNo, colNo) {
        setLastClicked([rowNo, colNo]);
        let oldBoard = [...currentBoard];

        if (oldBoard[rowNo][colNo] !== '') return;

        if (moves % 2 === 1) {
            oldBoard[rowNo][colNo] = 'X';
            setMoves(moves + 1);
        }
        else {
            oldBoard[rowNo][colNo] = 'O';
            setMoves(moves + 1);
        }

        setCurrentBoard(oldBoard);

        if (moves >= 4) {
            setWinner(checkWinner(currentBoard));
        }
    }

    function undoLast() {
        if (lastClicked.length === 0) return;


        let oldBoard = [...currentBoard];
        oldBoard[lastClicked[0]][lastClicked[1]] = '';

        setLastClicked([]);
        setCurrentBoard(oldBoard);
    }

    useEffect(() => {
        if (resetGame) {
            setCurrentBoard(newboard);
            setResetGame(false);
            setLastClicked([]);
        }

        if (winner !== '') {
            updateWinner(winner);
            return;
        }
    }, [winner, resetGame]);

    return (
        <div className='Board'>
            <div className='undo'>
                {
                    moves > 1 && lastClicked.length ? <button className='button' onClick={undoLast}>Undo</button> : <div />
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