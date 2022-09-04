import style from "./App.module.css";
import WinnerPage from "./Pages/WinnerPage"
import LoginPage from "./Pages/LoginPage";
import TablesPage from "./Pages/TablesPage";
import TablePage from "./Pages/TablePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
    const navigate = useNavigate()
	
    useEffect(() => {
		navigate('/winner/:userID');
    }, []);

    return (
        <div className={style.App}>			
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/:userID/tables" element={<TablesPage />} />
				<Route path="/:userID/:tableID/" element={<TablePage />} />
				<Route path="/:tableID/:userID" element={<WinnerPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
        </div>
    );
}

export default App;
