import style from "./Header.module.scss";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../Firebase/config";
import { ref, set } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Popup from "reactjs-popup";
import searchIcon from "../../Assets/icons/search.svg";
import { addUser, removeUser } from "../../redux-store/usersSlice";

export default function Header({ search, account }) {
	const navigate = useNavigate();
    const photoURL = useSelector((state) => state.currentUserSlice.value.photoURL);
	const openProfile = useCallback(() => {navigate("/profile")}, []);
	const users = {...useSelector(state => state.usersSlice.value)};
	const currentUser = useSelector(state => state.currentUserSlice.value)
	const dispatch = useDispatch();
	const {userID} = useParams();
	
	onAuthStateChanged(auth, user => {
		if (user) {
			// you are logged in
			dispatch(addUser(currentUser))
		} else {
			// you are logged out
		}
	})
	
	function signOutHandler() {
		signOut(auth).then(() => {
			// console.log('Log userID ::: ', userID)
			// dispatch(removeUser(userID))
			for (let key in users) {
				if (users[key].uid === userID) delete users[key]
			}
			set(ref(db, `gameState/users`), users)
			console.log('Log users ::: ', users)
			navigate('/login')
		})
	}

    return (
        <div className={style.headerWrapper}>
            {search && (
                <div className={style.searchIconWrapper}>
                    <img src={searchIcon} alt="search button" />
                </div>
            )}
            <p className={style.headerTitle}>Tik Tak Toe Classic</p>
            {account && (
				<Popup
					trigger={
						<div className={style.accountIconWrapper}>
							<img src={photoURL} alt="user" />
						</div>
					}
					arrow={false}
					position="bottom right"
				>
					<div className={style.popupContent}>
						<p onClick={openProfile}>Profile</p>
						<p onClick={signOutHandler}>Logout</p>
					</div>
				</Popup>
            )}
        </div>
    );
}
