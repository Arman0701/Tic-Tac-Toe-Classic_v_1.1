import style from './TableCard.module.scss';
import coinIcon from "../../Assets/icons/coins.svg"
import BoardIconSvg from '../BoardIconSvg/BoardIconSvg';
import Popup from 'reactjs-popup';
import CardPopupContent from '../CardPopupContent';

export default function TableCard({item}) {
	return (
		<Popup 
			trigger={
				<div className={style.tableCardWrapper}>
					<h4>{item.name}</h4>
					<BoardIconSvg color={item.color} />
					<div className={style.boardPrice}>
						<h5>{item.price}</h5>
						<div className={style.priceIconWrapper}>
							<img src={coinIcon} alt="coin icon" />
						</div>
					</div>
				</div>
			}
			modal
			nested
		>
			<CardPopupContent item={item} />
		</Popup>
	)
}