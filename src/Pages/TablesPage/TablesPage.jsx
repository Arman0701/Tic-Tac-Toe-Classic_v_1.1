import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../Firebase/config";
import style from './TablesPage.module.scss';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import TableCard from "../../Components/TableCard";
import { removeEmptyTables } from "../../redux-store/tablesSlice"

export default function TablesPage() {
	const [prices, setPrices] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const coins = useSelector(state => state.currentUserSlice.value.coins)
	const tables = useSelector(state => state.tablesSlice.value)
	const user = useSelector(state => state.currentUserSlice.value)
	const dispatch = useDispatch()

	function onLoadHandler() {
		dispatch(removeEmptyTables())
		set(ref(db, "gameState/boards/"), tables)
		set(ref(db, `gameState/users/${user.uid}`), user)
	}
	
	useEffect(() => {
		onValue(ref(db, "gameState/prices"), snapshot => {
			setPrices(snapshot.val())
			setIsLoading(false)
		})
	}, [])

	
    return (
        <div onLoad={onLoadHandler}>
            <Header search account />
			<h3 className={style.pageHeading}>
				Choose table
				<span>Coins: {coins}</span>
			</h3>
			<div className={style.tablesWrapper}>
				{
					prices.map(item => <TableCard key={item.price} item={item} />)
				}
			</div>
			<Loader trigger={isLoading} />
            <Footer />
        </div>
    );
}
