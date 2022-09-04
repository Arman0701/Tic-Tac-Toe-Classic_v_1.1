import style from "./LoginPage.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tablesInit } from "../../redux-store/tablesSlice";
import { usersInit } from "../../redux-store/usersSlice";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import LoginTab from "../../Components/LoginTab";
import SignupTab from "../../Components/SignupTab";
import getData from "../../helpers/getData";


export default function LoginPage() {
	const [isLoginState, setIsLoginState] = useState(true);
	const dispatch = useDispatch();
	const loginTabHandler = useCallback(() => setIsLoginState(true), []);
	const signupTabHandler = useCallback(() => setIsLoginState(false), []);

	useEffect(() => {
		dispatch(tablesInit(getData("tables")))
		dispatch(usersInit(getData("users")))
	}, [])


    return (<>
        <Header />
			<div className={style.loginPageContent}>
				<div className={style.tabs}>
					<p onClick={loginTabHandler} className={isLoginState ? style.active : undefined}>Login</p>
					<p onClick={signupTabHandler} className={!isLoginState ? style.active : undefined}>Signup</p>
				</div>
				<div 
					style={isLoginState ? {
						borderRadius: "0 7px 7px 7px"
					} : {
						borderRadius: "7px 0 7px 7px"

					}}
					className={style.loginPageWrapper}>
					{isLoginState 
						? <LoginTab />
						: <SignupTab />
					}
				</div>
			</div>
		<Footer />
	</>
    );
}
