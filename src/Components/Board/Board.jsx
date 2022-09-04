import style from './Board.module.scss';
import Cell from "../Cell";
import AccountImage from '../AccountImage';
import Loader from '../Loader';
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../../Firebase/config';
import { useParams } from "react-router-dom";
import coinIcon from "../../Assets/icons/coins.svg"

export default function Board() {
	const [boardState, setBoardState] = useState(null);
	const [isLoading, setIsLoading] = useState(true)
	const { tableID } = useParams()

	useEffect(() => {
		onValue(ref(db, `gameState/boards/${tableID}`), snapshot => {
			setBoardState(snapshot.val())
			setIsLoading(false)
		})
	}, [])

	return <>
	<Loader trigger={isLoading} />
	{boardState &&
		<>
			<div className={style.playersBlock}>
				<div className={style.player1Block}>
					<AccountImage displayname={boardState?.player1?.displayname} />
					<p>{boardState?.player1?.displayname || "No player"}</p>
					<span>{boardState?.score?.player1}</span>
				</div>
				<div className={style.tableTitleBlock}>
					<p>{boardState.name}</p>
					<div className={style.tablePriceBlock}>
						<p>{boardState.price}</p>
						<div className={style.iconWrapper}>
							<img src={coinIcon} alt="coins image" />
						</div>
					</div>
				</div>
				<div className={style.player2Block}>
					<span>{boardState?.score?.player2}</span>
					<p>{boardState?.player2?.displayname || "No player"}</p>
					<AccountImage displayname={boardState?.player2?.displayname} />
				</div>
			</div>
			<div className={style.boardWrapper}>
				{
					boardState?.board.map((item, index) => <Cell key={index} item={item} boardState={boardState} />)
				}
			</div>
		</>
	}
	</>
}