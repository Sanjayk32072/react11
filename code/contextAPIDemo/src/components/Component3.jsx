import React from 'react'
import { useContext } from 'react'
import { myContext } from '../App'
function Component3 ()
{
    const {count,name} = useContext(myContext)
    return (
    <div style={{border:'1px solid red',height:'200px',width:'200px'}}>
            <p>I'm component 3</p>
            <p>{count}</p>
            <p>{name}</p>
    </div>
  )
}

export default Component3
