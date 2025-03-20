import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
function App ()
{
  const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)

  useEffect(function ()
  {
    setTimeout(function ()
    {
      console.log("i will run")
    },5000)
  })
  return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
			<p>{count2}</p>
			<button onClick={() => setCount2(count2 - 1)}>-</button>
		</div>
	)
}

export default App
