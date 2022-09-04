import { useEffect, useState } from 'react';
import style from './AccountImage.module.scss';

export default function AccountImage({displayname}) {
	const [name, setName] = useState(displayname || "");
	useEffect(() => {
		setName(name.split(" ").map(word => word[0]).join(""))
	}, [])

	return (
		<div className={style.imageWrapper}>
			<p>{name}</p>
		</div>
	)
}