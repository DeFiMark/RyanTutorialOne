import '../App.css';
import Box from './Box';
import { useState } from 'react';

function TickTackToe() {

    const [turn, setTurn] = useState('X');
    const [board, setBoard] = useState(
        ['', '', '', '', '', '', '', '', '']
    )


    const rowStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

  const isThereAWinner = () => {

    const row1 = board[0] === board[1] && board[1] === board[2] && board[1] !== '';
    const row2 = board[3] === board[4] && board[4] === board[5] && board[4] !== '';
    const row3 = board[6] === board[7] && board[7] === board[8] && board[7] !== '';

    const col1 = board[0] === board[3] && board[3] === board[6] && board[3] !== '';
    const col2 = board[1] === board[4] && board[4] === board[7] && board[4] !== '';
    const col3 = board[2] === board[5] && board[5] === board[8] && board[5] !== '';

    const diag1 = board[0] === board[4] && board[4] === board[8] && board[4] !== '';
    const diag2 = board[2] === board[4] && board[4] === board[6] && board[4] !== '';

    return row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2;
  }

  const clickBox = (whichBox) => {
    if (board[whichBox] !== '' || isThereAWinner()) {
        return;
    }
    
    const newBoard = board.slice(0);
    newBoard[whichBox] = turn;
    setBoard(newBoard);
    
    if (turn === 'X') {
        setTurn('O');
    } else {
        setTurn('X');
    }

  }

  const winnerText = () => {
    if (isThereAWinner()) {
        if (turn === 'X') {
            return 'WINNER: O';
        } else {
            return 'WINNER: X'
        }
    } else {
        return '';
    }
  }

  const reset = () => {
    setBoard(
        ['', '', '', '', '', '', '', '', '']
    );
    setTurn(
        'X'
    );
  }


  return (
    <div className="App">
        <p style={{fontSize: '45px', fontWeight: 'bold'}}>
            Turn: &nbsp; {turn}<br />
        </p>
        {/*
        -- AN ALTERNATIVE WAY TO DISPLAY THE WINNER --
        {
            isThereAWinner() &&
            <p>
                WINNER: {turn === 'X' ? 'O' : 'X'}
            </p>
        } */}
        <p style={{fontSize: '30px', fontWeight: 'bold'}}>
            {winnerText()}
        </p>

        <div style={rowStyle}>
            <Box text={board[0]} clickFunction={() => clickBox(0)}/>
            <Box text={board[1]} clickFunction={() => clickBox(1)}/>
            <Box text={board[2]} clickFunction={() => clickBox(2)}/>
        </div>
        <div style={rowStyle}>
            <Box text={board[3]} clickFunction={() => clickBox(3)}/>
            <Box text={board[4]} clickFunction={() => clickBox(4)}/>
            <Box text={board[5]} clickFunction={() => clickBox(5)}/>
        </div>
        <div style={rowStyle}>
            <Box text={board[6]} clickFunction={() => clickBox(6)}/>
            <Box text={board[7]} clickFunction={() => clickBox(7)}/>
            <Box text={board[8]} clickFunction={() => clickBox(8)}/>
        </div>
        
        {
            isThereAWinner() &&
            <button style={{width: '20vw', height: '5vh'}} onClick={() => reset()}>
                RESET GAME
            </button>
        }
        
    </div>
  );
}

export default TickTackToe;
