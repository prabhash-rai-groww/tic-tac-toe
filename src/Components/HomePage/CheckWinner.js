function checkWinner(currentBoard) {
    let winner = '';

    function setWinner(player) {
        winner = player;
    }

    for (let i = 0; i<3; i++) {
        // check rows
        if (currentBoard[i][0] !== '') {
            if (currentBoard[i][0] === currentBoard[i][1] && currentBoard[i][0] === currentBoard[i][2]) {
                setWinner(currentBoard[i][0]);
                break;
            }
        }
        // check columns
        if (currentBoard[0][i] !== '') {
            if (currentBoard[0][i] === currentBoard[1][i] && currentBoard[0][i] === currentBoard[2][i]){
                setWinner(currentBoard[0][i]);
                break;
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

    return winner;
}

export default checkWinner;