import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
	name: "usersSlice",
	initialState: {
		value: {}
	},
	reducers: {
		usersInit(state, {payload}) {
			if (payload) state.value = payload
		},
		addUser(state, {payload}) {
			if (payload.uid) state.value[payload.uid] = payload
		},
		removeUser(state, {payload}) {
			for (let key in state.value) {
				if (state.value[key].uid === payload) delete state.value[key]
			}
		}
	}
})

export const {usersInit, addUser, removeUser} = usersSlice.actions
export default usersSlice.reducer;