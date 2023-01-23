import React, { useState } from 'react';
import './Board.css';

function Board() {
    const [currentBoard, setCurrentBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    let [moves, setMoves] = useState(1);

    function cellClicked(rowNo, colNo) {
        let oldBoard = [...currentBoard];

        if (moves % 2 === 1) {
            oldBoard[rowNo][colNo] = 'X';
            setMoves(moves+1);
        }
        else {
            oldBoard[rowNo][colNo] = 'O';
            setMoves(moves+1);
        }

        setCurrentBoard(oldBoard);
        console.log(moves)
    }

    return (
        <div className='Board'>
            <table>
                <tbody>
                    {
                        currentBoard.map(
                            function (rowElement, rowNo) {
                                return <tr id='{rowNo}' className='board_row'>
                                    {
                                        rowElement.map(
                                            function (cellElement, colNo) {
                                                return <td id='{colNo}' className='board_cell' onClick={() => cellClicked(rowNo, colNo)}>{cellElement}</td>;
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