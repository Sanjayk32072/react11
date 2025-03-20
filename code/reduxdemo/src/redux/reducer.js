const initialState = {
    count: 0,
    isLogin:false
}
function myReducer (state=initialState,action)
{
    switch (action.type)
    {
        case "INCR": return { count: state.count + 1 };
        case "DECR": return { count: state.count - 1 };
        case "Reset": return { count: 0 };
        default: return state;
   } 
}
function loginReducer (state = initialState, action)
{
    switch (action.type) {
			case "login":
				return { isLogin: true }
			case "logout":
            return { isLogin: false }
        default: return state;
		}
}
export { myReducer, loginReducer };