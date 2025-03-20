import React from 'react'
import HookUseCallback from './components/hookUseCallback'
import { useState } from 'react'
import { useCallback } from 'react'
import HookUseMemo from './components/HookUseMemo'
import useAPILogic from './components/useAPILogic'
import usePrasad from './components/usePrasad'
function App ()
{
  const [count, setCount] = useState(0)
  const { data, errors } = useAPILogic('https://fakestoreapi.com/products')
  const x= usePrasad("raj")
  const fnName=useCallback(() =>
  {
    console.log("hello world")
  },[])
  return (
    <div>
      <p>{count}</p>
      <HookUseMemo />
      <HookUseCallback msg={fnName} c={count} />
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}


export default App
