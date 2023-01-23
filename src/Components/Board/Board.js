import React, { useState } from 'react';
import './Board.css';

function Board() {
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
            checkWinner();
        }
    }

    function checkWinner() {
        if (winner !== '') return;

        for (let i = 0; i<3; i++) {
            // check rows
            if (currentBoard[i][0] !== '') {
                if (currentBoard[i][0] === currentBoard[i][1] && currentBoard[i][0] === currentBoard[i][2]) {
                    setWinner(currentBoard[i][0]);
                }
            }
            // check columns
            if (currentBoard[0][i] !== '') {
                if (currentBoard[0][i] === currentBoard[1][i] && currentBoard[0][i] === currentBoard[2][i]){
                    setWinner(currentBoard[0][i]);
                }
            }
        }

        //check diagonals
        if (currentBoard[0][0] !== '') {
            if(currentBoard[0][0] === currentBoard[1][1] && currentBoard[0][0] === currentBoard[2][2]) setWinner(currentBoard[0][0]);
        }

        if (currentBoard[0][2] !== '') {
            if(currentBoard[0][2] === currentBoard[1][1] && currentBoard[0][2] === currentBoard[2][0]) setWinner(currentBoard[0][2]);
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