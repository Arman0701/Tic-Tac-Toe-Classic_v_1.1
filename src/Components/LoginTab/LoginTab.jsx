import style from "./LoginTab.module.scss";
import googleIcon from "../../Assets/icons/google.svg";
import { useCallback, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInit } from "../../redux-store/currentUserSlice";
import { ref, set } from "firebase/database";
import { addUser } from "../../redux-store/usersSlice";
import { current } from "@reduxjs/toolkit";

export default function LoginTab(){
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
	const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
    const handlePasswordChange = useCallback((e) => setPass(e.target.value), []);
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
	const currentUser = useSelector(state => state.currentUserSlice.value)

	const signInWithGoogle = useCallback(async () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				dispatch(userInit({
					uid: user.uid,
					displayname: user.displayName,
					email: user?.email || "",
					photoURL: user?.photoURL || "",
					lastVisit: user?.metadata?.lastSignInTime
				}))
				dispatch(addUser(currentUser))
				navigate(`/${user.uid}/tables`)
			})
	}, [])


	
    return (
        <div className={style.loginPageForm}>
            <input
                type="text"
                value={email}
                className={style.formInput}
                onChange={handleEmailChange}
                placeholder="Email"
            />
            <input
                type="text"
                value={pass}
                className={style.formInput}
                onChange={handlePasswordChange}
                placeholder="Password"
            />
            <div className={style.loginButton}>Login</div>

            <div className={style.formFooter}>
                <div className={style.googleButton} onClick={signInWithGoogle}>
                    <div className={style.iconWrapper}>
                        <img src={googleIcon} alt="google icon" />
                    </div>
                    Login with Google Account
                </div>
            </div>
        </div>
    );
}
