import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./currentUserSlice"
import usersSlice from "./usersSlice";
import tablesSlice from './tablesSlice';

export default configureStore({
	reducer: {
		currentUserSlice,
		usersSlice,
		tablesSlice,
	}
})