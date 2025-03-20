import React, { useEffect, useState } from 'react'
import './App.css'
function App ()
{
  const [p, setQuote] = useState({})
  const [count,setCount] = useState(0)
  useEffect(function ()
  {
   fetch("https://dummyjson.com/quotes/random")
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.catch((err) => console.log(err))
  },[count])
  return (
    <div>
      <h2>{p.quote}</h2>
      <p>{p.author}</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default App
