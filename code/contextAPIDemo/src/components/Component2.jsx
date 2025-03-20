import React, { useContext } from 'react'
import Component3 from './Component3'
import { myContext } from '../App'
function Component2 ()
{
    const { count }= useContext(myContext)   
  return (
    <div style={{border:'1px solid red',height:'300px',width:'300px'}}>
          <Component3 />
          <p>{count}</p>
    </div>
  )
}

export default Component2
