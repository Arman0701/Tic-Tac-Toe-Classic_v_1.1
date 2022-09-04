import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import style from './NotFoundPage.module.scss';
import { useEffect } from 'react';

export default function NotFoundPage() {
	useEffect(() => {
		const timeoutID = setTimeout(() => {
			window.history.go(-1)
		}, 5000)
	}, [])
	return (
		<>
			<Header />
			<div className={style.pageWrapper}>
				This is wrong address, so you will redirected to prevoius page...
			</div>
			<Footer />
		</>
	)
}