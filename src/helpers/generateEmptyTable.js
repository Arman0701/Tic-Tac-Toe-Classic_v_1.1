import { ref, set } from "firebase/database";
import { v1 } from "uuid";
import { db } from "../Firebase/config";

export default function generateEmptyTable(user, table) {
	let tableID = v1();
	set(ref(db, `gameState/boards/${tableID}`), {
		uid: tableID,
		board: Array.from(Array(9)).map((_, index) => ({
			id: index,
			value: "",
		})),
		player1: user,
		player2: {},
		turn: user.uid,
		started: false,
		winner: "", 
		score: {
			player1: 0,
			player2: 0,
			draw: 0
		},
		playAgain: {
			player1: false,
			player2: false
		},
		bottomLine: 5,
		price: +table.price,
		name: table.name
	})
	console.log('Log generateEmptyTable tableID ::: ', tableID)
	return tableID;
}