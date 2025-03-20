import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './redux/actions'
import './App.css'
import Header from './components/Header'
function App ()
{
  const dispatch = useDispatch()
	const count = useSelector((state) => state.myReducer.count)
  return (
		<div>
			<Header />
			<p>count:{count}</p>
			<button onClick={() => dispatch({ type: "login" })}>Login</button>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>reset</button>
			<button onClick={() => dispatch({ type: "logout" })}>Login</button>
		</div>
	)
}

export default App
