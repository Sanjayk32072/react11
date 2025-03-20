import React from 'react'
import { useState } from 'react';
export default function App ()
{
  const [c,setCount]=useState(0)

  return (
    <div>
      <p>count: {c}</p>
      <button onClick={()=>setCount(c+1)}>+</button>
    </div>
  )
}
