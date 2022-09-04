import { createSlice } from "@reduxjs/toolkit";

export const tablesSlice = createSlice({
	name: "tablesSlice",
	initialState: {
		value: []
	},
	reducers: {
		tablesInit(state, {payload}) {
			state.value = payload
		},
		removeEmptyTables(state) {
			for (let key in state.value) {
				if (! state.value[key].started) delete state.value[key]
			}
		}
	}
})

export const {tablesInit, removeEmptyTables} = tablesSlice.actions
export default tablesSlice.reducer