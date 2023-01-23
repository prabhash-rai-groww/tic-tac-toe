import React, { useState } from 'react';
import './Board.css';

function Board(props) {
    const [currentBoard, setCurrentBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    const [winner, setWinner] = useState('');

    let [moves, setMoves] = useState(1);

    function cellClicked(rowNo, colNo) {
        if (winner !== '') return;

        let oldBoard = [...currentBoard];

        if (oldBoard[rowNo][colNo] !== '') return;

        if (moves % 2 === 1) {
            oldBoard[rowNo][colNo] = 'X';
            setMoves(moves+1);
        }
        else {
            oldBoard[rowNo][colNo] = 'O';
            setMoves(moves+1);
        }

        setCurrentBoard(oldBoard);

        if (moves >= 4) {
            setWinner(props.CheckWinner(currentBoard));
        }
    }

    return (
        <div className='Board'>
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