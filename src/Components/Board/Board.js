import React, { useState } from 'react';
import './Board.css';

function Board() {
    const [currentBoard, setCurrentBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    return (
        <div className='Board'>
            {
                currentBoard.map(
                    function (row, rowNo) {
                        return <div className='board_row'>
                            {
                                row.map(
                                    function(cell, index) {
                                        return <div className='board_cell'>({rowNo}, {index})</div>;
                                    }
                                )
                            }
                        </div>
                        
                    }
                )
            }
        </div>
    )
}

export default Board;