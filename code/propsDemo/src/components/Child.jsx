import React from 'react'

function Child({title="prasad",count=5,fun}) {
  return (
    <div>
          <h1>{title} receives {count}</h1>
          <button onClick={()=>fun(5)}>+</button>
    </div>
  )
}

export default Child
