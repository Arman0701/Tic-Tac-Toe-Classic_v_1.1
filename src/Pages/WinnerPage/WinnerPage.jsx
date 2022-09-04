import style from './WinnerPage.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from 'react';
import { useState } from 'react';
import getData from '../../helpers/getData';
import { ref, set } from 'firebase/database';
import { db } from '../../Firebase/config';

export default function WinnerPage() {
	const { tableID, userID } = useParams();
	const boardState = useState(getData(`gameState/boards/${tableID}`))
	const navigate = useNavigate();
	const winner = (
		userID === boardState.player1.uid 
			? boardState.player1.displayname
			: boardState.player2.displayname
	)
	
	const goToMainMenu = useCallback(() => {
		// check if no players in table, so remove it from DB
		// ...

		// remove current user's data from table's data part
		// ...
		navigate("/start")
	}, [])

	const playAgain = useCallback(() => { //    EXPERIMENTAL CODE
		if (boardState.playAgain.player1 || boardState.playAgain.player2) {
			setTimeout(() => {
				navigate(`gameState/${userID}/${tableID}`)
			}, 3000)
		} else {
			if (userID === boardState.player1.uid) {
				set(ref(db, `gameState/boards/${tableID}/playAgain/player1`), true)
				// this part of code needed to refactoring to something like this, and you can delete IF statement
				// set(ref(db, `gameState/boards/${tableID}/playAgain/${userID}`), true)
			} else set(ref(db, `gameState/boards/${tableID}/playAgain/player2`), true)
		}
	}, [])
	
	return <div className={style.winnerPageWrapper}>
		<div className={style.score}>
			<p>{boardState.player1.displayname}'s score: {boardState.score.player1}</p>
			<p>{boardState.player2.displayname}'s score: {boardState.score.player2}</p>
		</div>
		<div>
		{
			userID === "draw"
			? <p>The game ended in draw. Good job!</p>
			: <p>Winner is {winner}</p> 
		}
		</div>
		<div className={style.buttons}>
			<div className={style.button} onClick={goToMainMenu}>Main Menu</div>
			<div className={style.button} onClick={playAgain}>Play again</div>
		</div>
	</div> 

}