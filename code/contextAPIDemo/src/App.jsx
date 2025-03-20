import React, { createContext } from 'react'
import './App.css'
import Component1 from './components/Component1'
import { useState } from 'react'
const myContext = createContext(0)
function App ()
{
  const [count, setCount] = useState(10);
  const [name,setName]=useState('')
  return (
		<myContext.Provider value={{count,name}}>
			<div>
				<Component1 />
      </div>
      <input type="text" placeholder='enter name'
        onChange={(e) => setName(e.target.value)} />
      <button onClick={()=>setCount(count+1)}>+</button>
		</myContext.Provider>
	)
}
export { myContext }
export default App
