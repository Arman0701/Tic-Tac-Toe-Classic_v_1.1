import style from "./Cell.module.css";
import { set, ref } from "firebase/database";
import { db } from "../../Firebase/config";
import { useLocation, useNavigate } from "react-router-dom";
import { isWinner } from "../../helpers/isWinner";
import { useEffect, useMemo } from "react";

export default function Cell({ item, boardState }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
	let playerScore = useMemo(() => boardState.score[boardState.turn], [])
	let drawScore = useMemo(() => boardState.score.draw, [])

	console.log('Log boardState ::: ', boardState)
	
	// useEffect(() => {
	// 	(async () => {
	// 		if (isWinner(boardState[boardState.turn].cells)) {
	// 			await set(ref(db, "gameState/winner"), boardState.turn);
	// 			await set(ref(db, `gameState/score/${boardState.turn}`), playerScore += 1);
	// 			navigate(`/winner/${boardState.turn}`);
	// 		} else {
	// 			const boardIsFull = boardState.board.every((element) => element.value)
	// 			if (boardIsFull) {
	// 				await set(ref(db, "gameState/score/draw"), drawScore += 1)
	// 				navigate("/winner/draw")
	// 			}
	// 		}
	// 	})()
	// })
	
    async function setCell() {
		if (
			!item.value &&
			boardState.player1.displayName &&
			boardState.player2.displayName &&
            pathname === `/board/${boardState.turn}/${boardState[boardState.turn].uid}`
			) {
			await set(ref(db, `gameState/board/${item.id}`), {...item, value: boardState.turn === "player1" ? "X" : "O"});
			await set(ref(db, `gameState//boards/${boardState.turn}/cells`), [...boardState[boardState.turn].cells, item.id]);
			await set(ref(db, "gameState/turn"), boardState.turn === "player1" ? "player2" : "player1");
        }
    }

    return (
        <div className={style.cellWrapper} onClick={setCell}>
            <p>{item.value}</p>
        </div>
    );
}
