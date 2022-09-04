import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
	name: "currentUserSlice",
	initialState: {
		value: {
			uid: "",
			email: "",
			displayname: "",
			coins: 1000,
			victory: 0,
			defeat: 0,
			isOnline: true,
			playingNow: false,
			lastVisit: "",
			cells: [],
		}
	},
	reducers: {
		userInit: (state, {payload}) => {
			state.value = {
				...state.value,
				uid: payload.uid,
				email: payload.email,
				displayname: payload.displayname,
				photoURL: payload.photoURL,
				lastVisit: payload.lastVisit, 
			}
		}
	}
})

export const { userInit } = currentUserSlice.actions;
export default currentUserSlice.reducer