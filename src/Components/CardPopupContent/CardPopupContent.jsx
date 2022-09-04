import style from './CardPopupContent.module.scss';
import coinIcon from "../../Assets/icons/coins.svg";
import Popup from "reactjs-popup";
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import getCorrespondingTableByPrice from '../../helpers/getCorrespondingTableByPrice';
import generateEmptyTable from '../../helpers/generateEmptyTable';

export default function CardPopupContent({item}) {
	const navigate = useNavigate();
	const user = useSelector(state => state.currentUserSlice.value)
	const tables = useSelector(state => state.tablesSlice.value)

	const connectionHandler = useCallback(async () => {
		let tableID = getCorrespondingTableByPrice(tables, item.price)
		if (!tableID) tableID = generateEmptyTable(user, item)
		console.log('Log tableID ::: ', tableID)
		console.log('Log user.uid ::: ', user.uid)
		navigate(`/${user.uid}/${tableID}`)
	}, [])

	return (
		<div className={style.popupWrapper}>
			<div className={style.popupHeader}>
				<p>{item.name}</p>
				<div className={style.boardPrice}>
					<h5>{item.price}</h5>
					<div className={style.priceIconWrapper}>
						<img src={coinIcon} alt="coin icon" />
					</div>
				</div>
			</div>
			<Popup
				trigger={
					<div className={style.popupButton}>
						Invite a friend
					</div>
				}
			>	
				{/* user friends list */}
				{/* this part must include data about table bottom line */}
			</Popup>
			<div className={style.popupButton} onClick={connectionHandler} >
				Connect
			</div>
		</div>
	)
}