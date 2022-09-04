import { useCallback, useEffect, useState } from "react";
import style from "./SignupTab.module.scss";
import { auth, db } from "../../Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function SignupTab() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");
	const navigate = useNavigate();

	const handleFname = useCallback((e) => setFname(e.target.value), []);
	const handleLname = useCallback((e) => setLname(e.target.value), []);
	const handleEmail = useCallback((e) => setEmail(e.target.value), []);
	const handlePass = useCallback((e) => setPass(e.target.value), []);
	const handleConfPass = useCallback((e) => setConfPass(e.target.value), []);

	const validateSignupForm = useCallback(() => {
		return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email) && 
				/^[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(pass) && 
				pass === confPass && fname && lname
	}, [])

	// const signupHandler = () => {
	// 	// if (validateSignupForm()) {
	// 		createUserWithEmailAndPassword(auth, email, pass)
	// 		.then( async (userCredential) => {
	// 			const user = userCredential.user;
	// 			await set(ref(db, `gameState/users/${user.uid}`), {
	// 				uid: user.uid,
	// 				email: email,
	// 				password: pass,
	// 				firstname: fname,
	// 				lastname: lname,
	// 				imageURL: user.imageURL || "",
	// 				isOnline: true,
	// 				playingNow: false,
	// 				coins: 1000,
	// 				victory: 0,
	// 				defeat: 0,
	// 				lastVisit: user.metadata.lastSignInTime
	// 			})
	// 			navigate(`/login`)
	// 		})
	// 		.catch((error) => {
	// 			alert(`${error.code} ${error.message}`)
	// 		});
	// 	// } else alert("Error occured!")
	// }
	
    return (
        <div className={style.signupForm}>
            <label htmlFor="f-name">
                <p>First name</p>
                <input type="text" value={fname} onChange={handleFname} id="f-name" />
            </label>
            <label htmlFor="l-name">
                <p>Last Name</p>
                <input type="text" value={lname} onChange={handleLname} id="l-name" />
            </label>
            <label htmlFor="email">
                <p>Email</p>
                <input type="text" value={email} onChange={handleEmail} id="email" />
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input type="text" value={pass} onChange={handlePass} id="password" />
            </label>
            <label htmlFor="password-repeat">
                <p>Confirm your password</p>
                <input type="text" value={confPass} onChange={handleConfPass} id="password-repeat" />
            </label>

            <div className={style.signupButton} >Create account</div>
        </div>
    );
}
