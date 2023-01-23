import React, { useState } from 'react';
import './Board.css';

function Board() {
    const [currentBoard, setCurrentBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    const [player, setPlayer] = useState(1);

    function cellClicked(rowNo, colNo) {
        console.log(rowNo, colNo)
        let oldBoard = [...currentBoard];

        if (player === 1) {
            oldBoard[rowNo][colNo] = 'X';
            setPlayer(2);
        }
        else {
            oldBoard[rowNo][colNo] = 'O';
            setPlayer(1);
        }

        setCurrentBoard(oldBoard);
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