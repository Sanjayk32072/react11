import { combineReducers, createStore } from 'redux';
import { myReducer, loginReducer } from './reducer';
const mainReducer = combineReducers({ myReducer, loginReducer })
const store = createStore(mainReducer);
const initialState = {
	count: 0,
	isLogin: false,
}
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
	},
})
export default store;
